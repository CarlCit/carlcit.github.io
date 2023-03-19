---
layout: post
title: "乱七八糟待整理"
subtitle: "威联通安装homeassistant"
date: 2022-09-11
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [家居,工具,NAS,Docker,HomeAssistant]
---

### 威联通安装错误

使用 Container Station 安装 HomeAssistant 时始终失败，提示错误如下：

```ruby
ervices-up: info: copying legacy longrun watchdog (no readiness notification)
s6-rc: info: service legacy-services successfully started
<jemalloc>: Unsupported system page size
<jemalloc>: Unsupported system page size 
<jemalloc>: Unsupported system page size
Fatal Python error: _PyRuntimeState_Init_impl: memory allocation failed
Python runtime state: unknown
```

错误解决办法：

```ruby
DISABLE_JEMALLOC=true
```







### 安装 HomeAssistant

Container Station - 创建 - 搜索 home-assistant - 安装（使用最多的）



环境

TZ=Asia/Shanghai

DISABLE_JEMALLOC=true



网络

host



设备

容器打勾

特权打勾



文件夹

挂载本机共享文件夹

/HomeAssistant	/config



创建





### 安装 HACS

在ha的配置目录建立custom_components目录。
访问[github.com](https://link.zhihu.com/?target=https%3A//github.com/hacs/integration/releases/)，下载hacs.zip。
解压hacs到custom_components目录，保证custom_components下有hacs子目录。另外themes、tts、www文件夹自己新建一个。

获取github的api access token。

获取token看这个：[hacs.xyz](https://link.zhihu.com/?target=https%3A//hacs.xyz/docs/configuration/pat)

HACS国人专用极速版：[https://github.com/hacs-china/integration](https://link.zhihu.com/?target=https%3A//github.com/hacs-china/integration)

主要步骤如下：

1-打开浏览器

你可能在浏览器中看到这个，所以我们可以检查一下。

第2步-转到你的GitHub“开发者设置”

然后是“个人访问令牌”或单击此处：[github.com](https://link.zhihu.com/?target=https%3A//github.com/settings/tokens)

第3步-开始生成

单击“生成新令牌”按钮。



### 添加 小米智能设备





### 添加 美的家居设备













```ruby
version: "3"
services:
aria2-ui:
restart: unless-stopped
image: oxeluz6x.mirror.aliyuncs.com/wahyd4/aria2-ui:latest
environment:
- ENABLE_AUTH=true
- ARIA2_USER=admin
- ARIA2_PWD=admin
ports:
- "6800:6800"
volumes:
- /share/Download:/data
- /share/Container/container-station-data/lib/docker/volumes/aria2:/app/conf
```





```ruby
docker run -d \
--name aliddns --restart=always \
-e AccessKeyId=xxx \
-e AccessKeySec=xxx \
-e DomainRR=nas \
-e DomainName=haijc.cn \
-e DomainType=A \
mjysci/aliddns:latest
```



# 威联通NAS配置阿里云域名和SSL证书

https://blog.csdn.net/silenceagle/article/details/124719515



# NAS 篇一：威联通NAS免费更换为阿里云SSL证书教程

https://post.smzdm.com/p/a5d6g3d3/



```
{
    "ipv4": {
        "result": "#{ipv4Result}",
        "addr": "#{ipv4Addr}",
        "domains": "#{ipv4Domains}"
    }
}
```







## Chrome



解决方案： 在当前页面点击空白处，用键盘输入 thisisunsafe不是在地址栏输入，就直接输入，然后回车就行了，页面即会自动刷新进入网页。

原因： 因为Chrome不信任这些自签名ssl证书，为了安全起见，直接禁止访问了，thisisunsafe 这个命令，说明你已经了解并确认这是个不安全的网站，你仍要访问就给你访问了。
————————————————
版权声明：本文为CSDN博主「NAMELZX」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/NAMELZX/article/details/121258171











## Bark Server

### docker compose

```yml
version: '3.8'
services:
  bark-server:
    image: finab/bark-server
    container_name: bark-server
    restart: always
    volumes:
      - ./data:/data
    ports:
      - "8080:8080"
```

![1615033116-7883663a0413772](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/1615033116-7883663a0413772.png)



![截屏2022-09-11 17.47.57](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-09-11%2017.47.57.png)





![截屏2022-09-04 16.34.46](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-09-04%2016.34.46.png)

![截屏2022-09-11 18.05.19](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-09-11%2018.05.19.png)

![截屏2022-09-04 16.34.37](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-09-04%2016.34.37.png)

![截屏2022-08-07 11.27.38](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-08-07%2011.27.38.png)





```
BASEDIR
/usr/lib/unifi
BIND_PRIV
true
CERTDIR
/unifi/cert
CERTNAME
cert.pem
CERT_IS_CHAIN
false
CERT_PRIVATE_NAME
privkey.pem
DATADIR
/unifi/data
GOSU_VERSION
1.10
LOGDIR
/unifi/log
ODATADIR
/var/lib/unifi
OLOGDIR
/var/log/unifi
ORUNDIR
/var/run/unifi
PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
RUNAS_UID0
true
RUNDIR
/unifi/run
TZ
Asia/Shanghai
UNIFI_GID
999
UNIFI_UID
999
```





![截屏2022-10-02 12.05.54](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-02%2012.05.54.png)



![截屏2022-10-02 12.06.23](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-02%2012.06.23.png)









![截屏2022-10-02 12.28.04](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-02%2012.28.04.png)



![截屏2022-10-02 12.28.24](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-02%2012.28.24.png)















![JPG](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/JPG.JPG)







![I7MpAe](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/I7MpAe.jpg)

![qonglong](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/qonglong.png)

![PNG](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/PNG.PNG)





# Bark 通知



https://api.day.app/UYrsCNSYvWFNzbNJxzcFr9/⌘ 公网 IP 变更 ⌘/  当前 IP 地址：「#{ipv4Addr}」 🇨🇳 %250a  域名解析结果：「#{ipv4Result}」 🎉?icon=https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/PNG.PNG



?icon=https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/I7MpAe.jpg



https://nas.haijc.cn:12333/xxxxxxxx/公网IP变更/新 IP「#{ipv4Addr}」📮 域名解析「#{ipv4Result}」?icon=https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/PNG.PNG



https://api.day.app/Uxxxxxx/标题/内容?icon=https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/I7MpAe.jpg



https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/qonglong.png



http://nas.haijc.cn:2333/ggNsMjZTM73DZMK8329Zh5/这里改成你自己的推送内容

https://api.day.app/xxx



https://nas.haijc.cn:12333/nLTyNQKve6pefYoC4Ke9PA/



http://nas.haijc.cn:2333/ggNsMjZTM73DZMK8329Zh5/公网IP变更/新 IP「#{ipv4Addr}」📮 域名解析「#{ipv4Result}」?icon=https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/PNG.PNG



换行

%0a

%250a

\n







## **常用端口号：**

https://tool.chinaz.com/port



代理服务器常用以下端口：

（1）. HTTP协议代理服务器常用端口号：80/8080/3128/8081/9080

（2）. SOCKS代理协议服务器常用端口号：1080

（3）. FTP（文件传输）协议代理服务器常用端口号：21

（4）. Telnet（远程登录）协议代理服务器常用端口：23

 

HTTP服务器，默认的端口号为80/tcp（木马Executor开放此端口）；

HTTPS（securely transferring web pages）服务器，默认的端口号为443/tcp 443/udp；

Telnet（不安全的文本传送），默认端口号为23/tcp（木马Tiny Telnet Server所开放的端口）；

FTP，默认的端口号为21/tcp（木马Doly Trojan、Fore、Invisible FTP、WebEx、WinCrash和Blade Runner所开放的端口）；

TFTP（Trivial File Transfer Protocol ），默认的端口号为69/udp；

SSH（安全登录）、SCP（文件传输）、端口重定向，默认的端口号为22/tcp；

SMTP Simple Mail Transfer Protocol (E-mail)，默认的端口号为25/tcp（木马Antigen、Email Password Sender、Haebu Coceda、Shtrilitz Stealth、WinPC、WinSpy都开放这个端口）；

POP3 Post Office Protocol (E-mail) ，默认的端口号为110/tcp；

WebLogic，默认的端口号为7001；

WebSphere应用程序，默认的端口号为9080；

WebSphere管理工具，默认的端口号为9090；

JBOSS，默认的端口号为8080；

TOMCAT，默认的端口号为8080；

WIN2003远程登陆，默认的端口号为3389；

Symantec AV/Filter for MSE ,默认端口号为 8081；

Oracle 数据库，默认的端口号为1521；

ORACLE EMCTL，默认的端口号为1158；

Oracle XDB（ XML 数据库），默认的端口号为8080；

Oracle XDB FTP服务，默认的端口号为2100；

MS SQL*SERVER数据库server，默认的端口号为1433/tcp 1433/udp；

MS SQL*SERVER数据库monitor，默认的端口号为1434/tcp 1434/udp；

QQ，默认的端口号为1080/udp
