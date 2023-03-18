---
layout: post
title: "R2S 软路由刷 OpenWrt 后在 Docker 中安装 HassIO"
subtitle: "R2S + OpenWrt + Docker + HomeAssistant"
date: 2021-11-18
author: "Carl"
header-style: text
tags: [家居,R2S,OpenWrt,Docker,Hassio]
---

R2S 使用固件 [Docker版_稳定精简](https://github.com/DHDAXCW/NanoPi-R2S-2021) 自带 Docker ，在其中安装 HASSIO（HomeAssistant）。

经过使用发现这个版本没有 Supervisor ，使用体验不好，而且版本高了会卡死，如果添加设备多，还是使用树莓派或x86设备稳定很多。

我目前就主要是用 Docker 安装 HassIO 后添加电表数据看看，后期需求多了需要换设备，R2S只适合旁路由跑个科学上网合适。



## Docker扩容

```
Docker 根目录	/opt/docker (438.17 MB 可用)
扩容这个根目录
```

系统 > 磁盘管理 > 磁盘 > 修改 > 新建（Free Space）> 格式化 > ext4 格式化 > mmcblk0p3 13.98 GB

挂载这个盘

```bash
# 通过 ssh 连接 R2S 设备

$ ssh root@192.168.2.200

FusionWrt# 

# 查看硬盘挂载情况

FusionWrt# df -h
Filesystem                Size      Used Available Use% Mounted on
/dev/root               188.0M    188.0M         0 100% /rom
tmpfs                   495.3M     16.0M    479.2M   3% /tmp
/dev/loop0              560.3M    122.1M    438.2M  22% /overlay
overlayfs:/overlay      560.3M    122.1M    438.2M  22% /
tmpfs                   512.0K         0    512.0K   0% /dev
cgroup                  495.3M         0    495.3M   0% /sys/fs/cgroup
/dev/mmcblk0p1           63.0M     12.4M     49.3M  20% /mnt/mmcblk0p1
overlayfs:/overlay      560.3M    122.1M    438.2M  22% /opt/docker
FusionWrt# 

# 找到 Docker 目录并卸载

FusionWrt# /etc/init.d/dockerd stop

# 命令 fdisk -l 找到需要挂载的盘

FusionWrt# fdisk -l

Device         Boot   Start      End  Sectors  Size Id Type
/dev/mmcblk0p1 *      65536   196607   131072   64M 83 Linux
/dev/mmcblk0p2       262144  1798143  1536000  750M 83 Linux
/dev/mmcblk0p3      1798144 31116287 29318144   14G 83 Linux

# 将盘挂载到 Docker 

FusionWrt# mount /dev/mmcblk0p3 /opt/docker

# 查看是否挂载成功

FusionWrt# df -h

/dev/mmcblk0p3 13.7G 40.0M 12.9G 0% /opt/docker
```

重启 R2S 会掉盘，需要添加开机自动挂载

```bash
# 将下面的命令添加到软路由：
# 系统 > 启动项 > 本地启动脚本 > 粘贴 > 提交

/etc/init.d/dockerd stop
umount /opt/docker
mount /dev/mmcblk0p3 /opt/docker
/etc/init.d/dockerd start
```



## 安装 HassIO

安装时的网络最好是科学方式，避免下载文件失败。

需要在 Docker 目录下创建 jobs.json 文件

```bash
# 先进入 Docker 目录

FusionWrt# cd /opt/docker
FusionWrt# ls
buildkit    image       overlay2    swarm       volumes
containerd  lost+found  plugins     tmp
containers  network     runtimes    trust

# 使用 vi 命令编辑文件

FusionWrt# vi jobs.json

# 进入 vi 命令编辑界面，按 i 进入编辑状态，
# 将下面的代码复制粘贴进去后，按 esc 退出编辑状态，
# 再输入 :wq 保存并退出编辑。

{"ignore_conditions": ["healthy"]}

# 查看是否保存文件

FusionWrt# ls
buildkit    image       network     runtimes    trust
containerd  jobs.json   overlay2    swarm       volumes
containers  lost+found  plugins     tmp


# 退出 Docker 目录，输入下面 hassio 安装运行命令

docker run -d --name hassio_supervisor --privileged \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/run/dbus:/var/run/dbus \
-v /opt/docker/hassio:/data \
-e SUPERVISOR_SHARE="/opt/docker/hassio" \
-e SUPERVISOR_NAME=hassio_supervisor \
-e HOMEASSISTANT_REPOSITORY="homeassistant/qemuarm-64-homeassistant" \
--restart unless-stopped homeassistant/aarch64-hassio-supervisor:2020.12.7

# 输入下面命令查看 hassio 运行日志

FusionWrt# docker logs hassio_supervisor

```

安装完成后，进入 Docker 容器可以看到正在运行，需要等待自动安装其他插件，共有 7个容器。

仓库地址：[homeassistant/aarch64-hassio-supervisor](https://hub.docker.com/r/homeassistant/aarch64-hassio-supervisor) 尝试过较新版本都安装失败，R2S卡死状态，不知道什么原因，用回 2020.12.7 版本顺利完成安装。

等 7个容器都安装完成后，打开浏览器输入 R2S 的 IP 地址，加上 8123 端口

```
http://192.168.2.200:8123
```

进入 Preparing Home Assistant 安装界面

等待 20分钟左右就会安装完成，填写相关信息即可。



## Homeassistant

经过使用发现 hassio 还是太臃肿，而且功能在 r2s 受局限非常难用，对 r2s性能造成很大的压力，决定只是纯粹安装 homeassistant 就行了。

后期如果需要加强使用还是需要购买树莓派专门来运行智能家居系统。

```bash
# 登陆进入 R2S
ssh root@192.168.2.200

# 运行下面的命令，在线下载安装最新版本
docker run -d \
--name="home-assistant" \
--net=host \
--restart=always \
-v /opt/docker/homeassistant/config:/config \
homeassistant/home-assistant:latest
```

安装完成后内存占用比之前的 hassio 少很多，可用内存 45%左右。



## 添加ESP32电表

正泰 DDSU666 智能电表通过 ESP32-C3 模块 ESPHome 添加进 HA。

进入 HA 管理页面

添加电表数据

配置 > 集成 > esp32_c3 > 密码 123456 > 添加成功

设置电费

配置 > 能源 > 电力公司 > 用电量 > 添加数据 > Ep > 固定价 0.608 > 保存
