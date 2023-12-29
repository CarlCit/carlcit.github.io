---
layout: post
title: "威联通NAS安装阿里云盘WebDAV服务并添加到Infuse"
subtitle: "QNAP + aliyundrive + WebDAV + Infuse"
date: 2021-12-25
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [NAS]
---

由于在 Apple TV 4K 使用 Infuse 软件，可以添加 WebDAV 服务让观看影视剧变得更方便。刚好有威联通的 NAS 就在其中安装了此服务，使用了有半年体验非常不错，稳定没有失效。

其他设备也是可以添加此 阿里云盘 WebDAV 服务的，详情可以参考 [GitHub](https://github.com/messense/aliyundrive-webdav)



### QNAP 中安装

打开威联通 NAS 中的 ContainerStation 应用也就是 Docker

![截屏2021-12-25 14.31.55](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2014.31.55.png)

选择 **创建 - 创建应用程序** 

![截屏2021-12-25 14.33.18](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2014.33.18.png)

在其中 YAML 填入以下代码

![截屏2021-12-25 14.36.04](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2014.36.04.png)

```yaml
version: '3.3'
services:
  aliyundrive-webdav:
    container_name: aliyundrive-webdav
    restart: unless-stopped
    ports:
      - '8888:8080'
    environment:
      - 'REFRESH_TOKEN=mytoken...'
    image: messense/aliyundrive-webdav
```

* 阿里云盘的 `REFRESH_TOKEN` 获取方法在下面；

* 网盘访问映射端口 `:8888` 可以根据自己需要修改。

完成修改后点击 **创建** 完成，等待启动。

![截屏2021-12-25 15.30.18](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2015.30.18.png)

启动完成后可以通过下面地址访问你的阿里云盘文件

`http://NAS的IP:8888`   

![截屏2021-12-25 15.13.08](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2015.13.08.png)



### 获取 token

在电脑登录阿里云盘，Chrome 打开开发者工具 Application -> Local Storage

复制 refresh_token 中的字符，填入到上面的代码中。

![截屏2021-12-25 14.50.44](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2014.50.44.png)



### Infuse 效果

找到自己需要看的资源，保存到阿里云盘对应目录，再去 Infuse 添加 WebDAV 服务。只要支持此服务的视频播放器都可以，只是在 Apple TV 上此软件体验较好。

![截屏2021-12-25 15.21.06](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2015.21.06.png)

填入对应信息点击 **新增** 即可，等待数据自动下载完成。播放蓝光原盘都是不卡顿的，也能播放杜比视界视频（需要电视和盒子支持，不然颜色偏绿）。

用户名：admin

密码：123456

![截屏2021-12-25 15.27.57](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-25%2015.27.57.png)

在 macOS 或 iOS 客户端添加后，开启 iCloud 就能同步过去，也可以去 Apple TV 4K 上的 Infuse 中添加只是遥控操作不便。
