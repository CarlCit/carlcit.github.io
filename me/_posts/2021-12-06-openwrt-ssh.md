---
layout: post
title: "R2S 固件 OpenWrt 使用 SSH 免密码登陆"
subtitle: "macOS + OpenWrt + SSH"
date: 2021-12-06
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [工具,OpenWrt,ssh,R2S,软路由]
---

经常需要登陆一下 R2S 折腾，每次输入密码麻烦，为了减少麻烦，使用密钥登陆方便快捷也安全。

OpenWrt 设置

![截屏2021-12-06 10.33.14](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2010.33.14.png)

macOS 公钥获取并填入上面图片中的 ssh 密钥保存

![截屏2021-12-06 10.36.02](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2010.36.02.png)

现在直接在 macOS 终端（terminal）中直接登陆

```bash
ssh root@192.168.2.200
```



R2S CPU核心温度查看

```bash
# 进入 sys 目录，执行命令

cd /sys/

# 查看温度

cat ./devices/virtual/thermal/thermal_zone0/temp
```



![](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2021-12-06%2010.39.49.png)
