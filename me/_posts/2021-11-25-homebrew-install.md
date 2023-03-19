---
layout: post
title: "Homebrew 安装和基本用法"
subtitle: "macOS + Homebrew"
date: 2021-11-25
author: "Carl"
header-img: "img/post-bg.jpg"
tags: [Apple,Homebrew]
---



# Homebrew 安装

像 Mac 高手一样管理应用，从 Homebrew 开始 [sspai 文章链接](https://sspai.com/post/42924) 

Mac 下镜像飞速安装 Homebrew 教程 [zhihu 文章链接](https://zhuanlan.zhihu.com/p/90508170)



[Homebrew 官网](https://brew.sh/index_zh-cn.html)



使用 Terminal（终端） 安装

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



# Homebrew 基本用法

假设需要安装的软件是 `wget`

| 操作                   | 命令                |
| ---------------------- | ------------------- |
| 查看Homebrew命令       | brew help           |
| 查看brew版本           | brew -v             |
| 更新brew版本           | brew update         |
| 更新Homebrew           | brew update         |
| 更新所有安装过的软件包 | brew upgrade        |
| 更新指定的软件包       | brew upgrade wget   |
| 查询已安装包列表       | brew list           |
| 查看任意包信息         | brew info wget      |
| 安装任意包             | brew install wget   |
| 卸载任意包             | brew uninstall wget |
| 列出任意包的依赖关系   | brew deps wget      |
| 列出可以更新的任意包   | brew outdated       |
| 查询可用包             | brew search wget    |



