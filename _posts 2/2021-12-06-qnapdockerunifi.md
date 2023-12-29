---
layout: post
title: "威联通QNAP使用ContainerStation安装 UniFi控制器"
subtitle: "QNAP + Docker + UniFi"
date: 2021-12-06
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [NAS]
---



为了方便安装，最好使用科学上网，这样就能正常快速下载安装包。



威联通官网 [如何在 Container Station 中安装 UniFi 控制器？](https://www.qnap.com/zh-cn/how-to/tutorial/article/%E5%A6%82%E4%BD%95%E5%9C%A8-container-station-%E4%B8%AD%E5%AE%89%E8%A3%85-unifi-%E6%8E%A7%E5%88%B6%E5%99%A8)



镜像官网 [jacobalberty/unifi](https://hub.docker.com/r/jacobalberty/unifi)



打开 Container Station 应用

下载 `jacobalberty/unifi:latest` 镜像文件

![截屏2021-12-06 16.01.48](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.01.48.png)

安装容器

1、设置容器信息 `UniFi_Controller`

![截屏2021-12-06 16.28.20](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.28.20.png)

2、设置网络信息，可以按照图中端口，也可以是 `Host`

![截屏2021-12-06 16.29.12](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.29.12.png)

3、设置存储盘信息 `UniFiConf`

![截屏2021-12-06 16.33.52](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.33.52.png)

4、创建完成自动启动，点击名称可以打开详细界面

![截屏2021-12-06 16.34.50](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.34.50.png)



浏览器打开网址，选择恢复备份，也可以设置新的。

```
http://192.168.0.0:8443
```



![截屏2021-12-06 16.35.53](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2016.35.53.png)



