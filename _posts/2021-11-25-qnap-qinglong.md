---
layout: post
title: "QNAP威联通NAS使用Docker安装青龙面板"
subtitle: "QNAP + Docker + qinglong"
date: 2021-11-25
author: "Carl"
header-img: "img/post-bg.jpg"
tags: 
  - NAS
  - Docker
---



### 待整理。。。

```bash
docker pull whyour/qinglong:latest



    
docker run -dit \
  -v $PWD/ql/config:/ql/config \
  -v $PWD/ql/log:/ql/log \
  -v $PWD/ql/db:/ql/db \
  -v $PWD/ql/repo:/ql/repo \
  -v $PWD/ql/raw:/ql/raw \
  -v $PWD/ql/scripts:/ql/scripts \
  -p 5700:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:latest
    
    
    


我进控制台依次执行了
`ql check`
`touch /ql/db/app.db && pm2 restart all`
`ql update`
然后就可以进去了，仅供参考。

# 查看登录账号密码
cat /ql/config/auth.json

# 更新并重启青龙
ql update                                              
# 运行自定义脚本extra.sh
ql extra                                               
# 添加单个脚本文件
ql raw <file_url>                                       
# 添加单个仓库的指定脚本
ql repo <repo_url> <whitelist> <blacklist> <dependence> <branch>   
# 删除旧日志
ql rmlog <days>                                        
# 启动tg-bot
ql bot                                                 
# 检测青龙环境并修复
ql check                                               
# 重置登录错误次数
ql resetlet                                            
# 禁用两步登录
ql resettfa                                            

```





```
docker run -d \
--name hassio_supervisor \
--privileged \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/run/dbus:/var/run/dbus \
-v /opt/hassio:/data \
-e SUPERVISOR_SHARE="/opt/hassio" \
-e SUPERVISOR_NAME=hassio_supervisor \
-e HOMEASSISTANT_REPOSITORY="homeassistant/qemuarm-64-homeassistant" \
--restart unless-stopped homeassistant/aarch64-hassio-supervisor




QNAP

status
系统整体健康状态
system_temp
系统整体温度
cpu_temp
CPU温度
cpu_usage
CPU使用率
memory_free
剩余内存
memory_used
已用内存
memory_percent_used
内存使用百分比
network_link_status
网络连通状态
network_tx
上传流量
network_rx
下载流量
drive_smart_status
磁盘S.M.A.R.T状态
drive_temp
磁盘温度
volume_size_free
卷剩余空间
volume_size_used
卷使用空间
volume_percentage_used
卷使用率百分比






docker run -d \
	--name homeassistant \
	--privileged \
	--restart=unless-stopped \
	-e TZ=MY_TIME_ZONE \
	-v /share/data/docker/homeassistant/config:/config \
	--network=host \
	ghcr.io/home-assistant/home-assistant:stable
	
	
docker run -d \
--name="home-assistant" \
--privileged \
--restart=always \
-e TZ=Asia/Shanghai \
-v /share/data/docker/homeassistant/config:/config \
--network=host \
ghcr.io/home-assistant/home-assistant:stable
  
  
	
docker run -d --name="home-assistant" -v /HomeAssistant:/config -v /etc/localtime:/etc/localtime:ro --net=host homeassistant/home-assistant:stable



apt-get install -y software-properties-common apparmor-utils apt-transport-https ca-certificates curl dbus jq network-manager


docker run -d --restart=always --name="home-assistant" -e TZ=Asia/Shanghai -e "JEMALLOC_DISABLE=true" -v /HomeAssistant:/config -p 8123:8123 -v /HomeAssistant:/etc/localtime:ro --net=host homeassistant/aarch64-homeassistant:latest
```







iptables -t nat -I POSTROUTING -o eth0 -j MASQUERADE



/etc/init.d/dockerd stop
umount /opt/docker
mount /dev/mmcblk0p3 /opt/docker
/etc/init.d/dockerd start



Unifi_Controller

unificonf	/unifi

unifi	/var/run/unifi



 /share/CACHEDEV3_DATA/Container/container-station-data/lib/docker/volumes/ariaConf/_data	/app/conf/key



 /share/CACHEDEV3_DATA/Container/container-station-data/lib/docker/volumes/aria/_data	/data



 /share/Download/Aria2_Download	/download



Unifi_Controller

/config
