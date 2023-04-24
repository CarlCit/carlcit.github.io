---
layout: post
title: "kms在线激活Windows&Office"
subtitle: "Windows + Office + kms"
date: 2021-11-25
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [OpenWrt]
---



本激活，只适用 vol 版本的 Windows 系统和 Office

激活可以使用180天，180天后需要再操作此方法再激活



### 激活windows

卸载密钥

`slmgr.vbs /upk`

更换密钥

`slmgr /ipk NRTT2-86GJM-T969G-8BCBH-BDWXG`

设置服务器地址

`slmgr /skms 192.168.2.200`

尝试激活

`slmgr /ato`

查看激活过期时间

`slmgr.vbs –xpr`



### 激活Office

找到 Office 安装路径进入

`cd "C:\Program Files (x86)\Microsoft Office\Office16"  `

设置激活服务器

`cscript ospp.vbs /sethst:192.168.2.200`

`备用服务器：home.xxshell.com`

激活

`cscript ospp.vbs /act`

查看激活的具体信息

`cscript"C:\Program Files (x86)\Microsoft Office\Office16\OSPP.VBS" /dstatus  `

密钥

`BHXN7-MQB36-MTHQ4-8MHKV-CYT97`
