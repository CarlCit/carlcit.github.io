---
layout: post
title: "Quantumult X配置文件Mac版"
subtitle: "Quantumult X"
date: 2023-05-03
header-img: "img/post-bg.jpg"
header-style: text
author: "Carl"
tags: [软件]
---



> ChatGPT：
>
> Quantumult X是一款iOS平台上的高级代理工具，可以实现广告拦截、访问控制、科学上网等功能。它支持众多的代理协议，包括Shadowsocks、Socks5、HTTP等，同时也支持订阅规则和自定义规则，可以让用户更加精准地控制网络访问。Quantumult X还支持与Surge规则兼容，可以使用已有Surge规则，并可拓展更多规则来源，而且它还具有对海外节点自动选择、提速、TCP快速打通等便利的功能。总的来说，Quantumult X是一款功能强大且易于使用的iOS代理工具。



我的 Quantumult X 配置文件

### Mac M1 版本：

```yaml
# Quantumult X 配置 ; 作者：武汉同学
# 最近更新时间 2023.04.27
# 设备 iOS、iPadOS 和 macOS（M1 Pro 版本）
# 使用的相同证书和配置可以同步通用

# macOS 部分功能不可用，比如：测试脚本、广告屏蔽等

# 建议在「其他设置」里「GeoLite2」的「来源」填写下面链接，并开启「自动更新」
;https://raw.githubusercontent.com/Loyalsoldier/geoip/release/Country-only-cn-private.mmdb

# 策略组 图标订阅地址
;https://raw.githubusercontent.com/Koolson/Qure/master/Other/QureColor.json





# 📌 一些通用的设置参数项
[general]
# > 用于节点延迟测试
server_check_url = http://www.apple.com/generate_204
# > 服务器测试超时时间 (毫秒)
server_check_timeout=3000
# > 资源解析器，各类远程资源的转换，如节点，规则，复写 等
resource_parser_url= https://fastly.jsdelivr.net/gh/KOP-XIAO/QuantumultX@master/Scripts/resource-parser.js
# > 服务器 GEO 节点信息展示
geo_location_checker=http://ip-api.com/json/?lang=zh-CN, https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/GeoLocationChecker/QuantumultX/IP-API.js
# > 排除路由
excluded_routes= 10.0.0.0/8, 17.0.0.0/8, 24.105.30.129/32, 100.64.0.0/10, 172.16.0.0/12, 182.162.132.1/32, 185.60.112.157/32, 185.60.112.158/32,192.168.0.0/16,239.255.255.250/32
# > 根据网络自动切换 分流/直连/全局代理 等模式
running_mode_trigger=filter, filter, wifi1:all_direct, wifi2:all_proxy
# > udp 服务策略
fallback_udp_policy = direct






# 📌 DNS设置
[dns]


# > 禁用系统 DNS 以及 ipv6
;no-system
;no-ipv6

# > 指定 dns 服务器，并发响应选取最优结果
server=114.114.114.114
server=223.5.5.5
server=119.29.29.29
server=8.8.8.8

# > HTTP/3 的 DoH 
;prefer-doh3
# > DNS over HTTPS（加密DNS设置） (iOS 15.0以下doh-server数据为1，以上为2)
;doh-server = https://dns.alidns.com/dns-query
# > DNS over QUIC（加密DNS设置）
;doq-server = quic://dns.adguard.com





# 📌 策略组，不同策略组分流不同规则
[policy]
static=选择节点, SG, TW, US, JP, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Rocket.png
# static 策略组中，你需要手动选择想要的节点/策略组。
# available 策略组将按顺序选择你列表中第一个可用的节点。
# round-robin 策略组，将按列表的顺序轮流使用其中的节点。
# url-latency-benchmark 延迟策略组，选取延迟最优节点。
# dest-hash 策略组，随机负载均衡，但相同域名走固定节点。
# ssid 策略组，将根据你所设定的网络来自动切换节点/策略组

# > 静态策略组
static=Apple Service, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Apple.png
static=Microsoft, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Microsoft.png
static=FINAL, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Final.png
static=Mail, direct, proxy, TW, US, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Mail.png
static=Google, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Google_Search.png
static=GitHub, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/GitHub.png
static=Telegram, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Telegram.png
static=TikTok, direct, proxy, SG, TW, US, JP, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/TikTok.png
static=YouTube, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/YouTube.png
static=Netflix, direct, proxy, SG, TW, US, JP, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Netflix.png
static=国外网站, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Area.png
static=国外影视, direct, proxy, SG, TW, US, JP, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/HBO_Max.png
static=国内视频, direct, proxy, 选择节点, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/iQIYI&bilibili.png

# > 动态策略组
# > alive-checking 设置为 true，即使该策略处于空闲状态，也会间隔时间，动基准测试
url-latency-benchmark=SG, server-tag-regex=(?=.*(🇸🇬|新加坡|狮城|SG|(?i)Singapore))^((?!(港|台|日|韩|美)).)*$, check-interval=1200, tolerance=0, alive-checking=false, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Singapore.png
url-latency-benchmark=TW, server-tag-regex=(?=.*(🇹🇼|台湾|台|TW|(?i)Taiwan))^((?!(港|日|韩|新|美)).)*$, check-interval=1200, tolerance=0, alive-checking=false, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Taiwan.png
url-latency-benchmark=US, server-tag-regex=(?=.*(🇺🇸|美国|美|US|(?i)American))^((?!(港|日|韩|新|台)).)*$, check-interval=1200, tolerance=0, alive-checking=false, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/United_States.png
url-latency-benchmark=JP, server-tag-regex=(?=.*(🇯🇵|日本|日|JP|(?i)Japan))^((?!(港|美|韩|新|台)).)*$, check-interval=1200, tolerance=0, alive-checking=false, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Japan.png





# 📌 本地服务器部分
[server_local]
# 以下示范都是 ip(域名):端口，
# 比如 vmess-a.203.167.55.4:777 ，实际是 203.167.55.4:777
# 前面的 ss-a，ws-tls这些，只是为了让你快速找到自己节点的类型
# 目前支持 shadowsocks/shadowsocksR/Vmess/Trojan/http(s)/Socks5 等类型
# 支持 tls-cert-sha256 以及 tls-pubkey-sha256 参数等自定义TLS验证




# 📌 服务器远程订阅
[server_remote]





# 📌 本地分流规则(对于完全相同的某条规则，本地的将优先生效)
[filter_local]
host-suffix, ebay.com, 国外网站
host, speed.cloudflare.com, 国外网站
host-suffix, haijc.cn, direct
host-suffix, happyhues.co, 国外网站
host-suffix, aihi.one, direct
host-suffix, dynadot.com, 国外网站
host-suffix, songlin.me, direct
host-suffix, openai.com, 国外网站

# > 一些比较容易忽视的分流
host, ad.12306.cn, direct
host, gg.caixin.com, direct
host, sdkapp.uve.weibo.com, direct
host-suffix, u3.ucweb.com, reject
host, amdc.m.taobao.com, reject
host, ntb.lanjie100.com, reject
host-suffix, kuwo.cn, direct

# >  ip 规则
host-suffix, local, DIRECT
ip-cidr, 192.168.0.0/16, DIRECT
ip-cidr, 10.0.0.0/8, DIRECT
ip-cidr, 172.16.0.0/12, DIRECT
ip-cidr, 127.0.0.0/8, DIRECT
ip-cidr, 100.64.0.0/10, DIRECT
ip-cidr, 224.0.0.0/4, DIRECT
ip6-cidr, fe80::/10, DIRECT

# > 已采用 ip 池数据
GEOIP, CN, DIRECT

# > 不在上述规则中(远程以及本地)的剩余请求，将走 final 指定的节点/策略
final, FINAL





# 📌 规则分流远程订阅
[filter_remote]
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/WeChat/WeChat.list, tag=微信直连, force-policy=direct, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list, tag=去广告, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list, tag=运营商劫持, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Microsoft/Microsoft.list, tag=Microsoft, force-policy=Microsoft, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Google/Google.list, tag=Google, force-policy=Google, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Telegram/Telegram.list, tag=Telegram, force-policy=Telegram, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/GitHub/GitHub.list, tag=GitHub, force-policy=GitHub, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok.list, tag=TikTok分流, force-policy=TikTok, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Netflix/Netflix.list, tag=Netflix, force-policy=Netflix, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/YouTube/YouTube.list, tag=YouTube, force-policy=YouTube, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Streaming.list, tag=国外影视, force-policy=国外影视, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/StreamingCN.list, tag=国内视频, force-policy=国内视频, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list, tag=国外网站, force-policy=国外网站, enabled=true
Mail.list, tag=邮箱, force-policy=Mail, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/Apple.list, tag=Apple服务, force-policy=Apple Service, update-interval=172800, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/BlockiOSUpdate.list, tag=Apple屏蔽更新, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/China.list, tag=国内网站, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/ChinaIP.list, tag=国内IP池, enabled=true

#支持 本地/iCloud 规则文件，位于 Quantumult X/Profiles 路径下
;filter.txt, tag=本地分流, enabled=false





# 📌 本地复写规则
[rewrite_local]





# 📌 复写远程订阅
[rewrite_remote]
https://raw.githubusercontent.com/weiyesing/QuantumultX/GenMuLu/ChongXieGuiZe/QuGuangGao/To%20advertise.conf, tag=去开屏广告, update-interval=172800, opt-parser=true, enabled=false
https://ybnet.ga/rewrite/usage.conf, tag=Usage VIP, update-interval=172800, opt-parser=false, enabled=false
https://ybnet.ga/rewrite/doc.conf, tag=WPS VIP, update-interval=172800, opt-parser=false, enabled=false
https://ybnet.ga/rewrite/xzj.conf, tag=熊掌记 VIP, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/aptv.conf, tag=APTV VIP, update-interval=172800, opt-parser=false, enabled=true
https://ybnet.ga/rewrite/qj.conf, tag=钱迹 VIP, update-interval=172800, opt-parser=false, enabled=false
https://ybnet.ga/rewrite/thunder.conf, tag=迅雷 VIP, update-interval=172800, opt-parser=false, enabled=false
https://ybnet.ga/rewrite/SpotifyPremium.conf, tag=Spotify VIP, update-interval=172800, opt-parser=false, enabled=true
https://ybnet.ga/rewrite/ilovepdf.conf, tag=iLovePDF VIP, update-interval=172800, opt-parser=false, enabled=false
# > TikTok 分区
https://github.com/ddgksf2013/Rewrite/raw/master/Function/BaiduCloud.conf, tag=百度网盘倍速, update-interval=86400, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-TW.conf, tag=TikTok台湾区, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-US.conf, tag=TikTok美国区, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-KR.conf, tag=TikTok韩国区, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult-X/TikTok-JP.conf, tag=TikTok日本区, update-interval=172800, opt-parser=false, enabled=false
# > 京东比价
https://raw.githubusercontent.com/Orz-3/QuantumultX/master/Netflix_ratings.conf, tag=Netflix 评分, update-interval=86400, opt-parser=false, enabled=false
https://github.com/chavyleung/scripts/raw/master/box/rewrite/boxjs.rewrite.quanx.conf, tag=boxjs, update-interval=172800, opt-parser=false, enabled=false
https://raw.githubusercontent.com/Orz-3/QuantumultX/master/JD_TB_price.conf, tag=京东淘宝比价, update-interval=86400, opt-parser=false, enabled=false
# > boxjs 插件库
# > 通用去广告
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf, tag=神机复写通用, update-interval=86400, opt-parser=false, enabled=true
# > YouTube 去广告
https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/youtube.conf, tag=Youtube 去广告, update-interval=172800, opt-parser=false, enabled=false
# Youtube premium 会员请勿开启此条
# > 解锁会员
https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Bilibili.conf, tag=哔哩去广告, update-interval=86400, opt-parser=false, enabled=true
# > 软件增强
# > 应用去广告
https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/zheye/zheye.snippet, tag=知乎去广告, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/zZPiglet/Task/master/UnblockURLinWeChat.conf, tag=微信解锁URL, update-interval=86400, opt-parser=false, enabled=true
https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Applet.conf, tag=小程序去广告, update-interval=86400, opt-parser=false, enabled=true
https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Weibo.conf, tag=微博去广告, update-interval=86400, opt-parser=false, enabled=false
https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Amap.conf, tag=高德去广告, update-interval=86400, opt-parser=true, enabled=false
# > 支持 本地/iCloud 的复写规则文件，位于 Quantumult X/Profiles 路径下
;rewrite.txt, tag=本地复写, opt-parser=false, enabled=false






# 📌 构造任务脚本
[task_local]
0 0 1 1 * xianxing.js, tag=武汉限行, img-url=circle.slash.system, enabled=true
0 30 8 ? * * Oilprice.js, tag=每日油价, img-url=car.fill.system, enabled=true
0 30 8 ? * * exchange.js, tag=汇率监控, img-url=creditcard.fill.system, enabled=true
0 0-23/12 * * * testflight.js, tag=testflight监控, img-url=https://raw.githubusercontent.com/Orz-3/mini/master/Color/testflight.png, enabled=true
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/traffic-check.js, tag=策略流量查询, img-url=network.system, enabled=true
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体解锁, img-url=checkmark.seal.system, enabled=true
event-interaction https://raw.githubusercontent.com/getsomecat/Qx/main/Net_Speed.js, tag=节点网速, img-url=link.icloud.fill.system, enabled=true
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/geo_location.js, tag=Geo IP, img-url=location.fill.viewfinder.system, enabled=true







# 📌 以下为证书&主机名部分
[mitm]
hostname = 
passphrase = 
p12 = 



# > 请自行在 APP 的 UI中 生成证书 并安装&信任
;skip_validating_cert = false
;force_sni_domain_name = false

# > 当使用 Quantumult X 在 M 芯片的 Mac 设备上作为局域网网关时，使用下面的参数来 跳过某些特定设备的 mitm 需求
;skip_src_ip = 192.168.4.50, 92.168.4.51

#当多个不同的 TCP 连接（非域名类请求）的目标 IP 不同，但这些连接的 TSL 握手 SNI 字段相同时，如需跳过其中某些连接的 MitM hostname 匹配过程，可使用👇参数。
;skip_dst_ip = 123.44.55.4

# hostname 为主机名，用,分隔多个
;hostname = *.example.com, *.sample.com


```

![截屏2023-05-03 12.11.48](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202305031214836.png)





### iOS 版本

```yaml

与 Mac 版本基本一致，只是开启的重写数量不同，自动选择策略方式不同。

```













