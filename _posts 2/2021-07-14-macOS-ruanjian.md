---
layout: post
title: "macOS安装软件允许任何来源"
subtitle: "macOS 软件安装"
date: 2021-07-14
author: "Carl"
header-img: "img/post-bg.jpg"
tags: 
  - macOS
  - Tips
---



### 解决问题办法：

`系统偏好设置 -> 安全性与隐私 -> 通用 -> 选择“任何来源”`

“通用”选项中如果没有“任何来源”这个选项，操作如下：



```bash
打开系统 terminal 终端：

command + 空格键  搜索 “terminal” 回车

在终端中执行命令：

sudo spctl --master-disable

然后按提示输入开机密码

完成后重新打开设置中安全性与隐私界面就可以了

如果要想不显示 "任何来源" 选项在终端中执行命令：

sudo spctl --master-enable
```





### 如果还是打不开软件：

```bash
打开系统 terminal 终端

输入一下命令后回车：

sudo xattr -d com.apple.quarantine /Applications/xxxx.app

（注意： /Applications/xxxx.app，换成你的App路径）
```



