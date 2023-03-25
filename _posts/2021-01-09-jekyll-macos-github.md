---
layout: post
title: "macOS安装Jekyll博客并发布到GitHub Pages"
subtitle: "Jekyll + macOS + GitHub"
date: 2021-01-09
author: "Carl"
header-img: "img/post-bg.jpg"
mathjax: true
tags: 
  - 博客
  - Jekyll
  - GitHub
---

Mac 电脑安装博客服务 Jekyll，并将博客网站托管在 GitHub Pages



⚠️

这些安装方法都已经打开代理，并且是增强模式，不然终端不会走代理下载速度非常慢还会出错。

使用自动脚本选择国内源可以不需要代理。



### 安装 Homebrew 



官方安装方法

https://www.jekyll.com.cn/docs/installation/macos/



安装方法之前的博客文章已经写过

[Homebrew 安装和基本用法](https://songlin.me/2021/11/25/homebrew-install)



#### 安装脚本



[作者知乎文章](https://zhuanlan.zhihu.com/p/111014448)

自动安装脚本，自动选择软件源，中文版

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

选择下载源：

![截屏2022-10-09 15.41.50](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2015.41.50.png)

下载安装中：

![截屏2022-10-09 15.42.57](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2015.42.57.png)

安装成功：

![截屏2022-10-09 15.53.00](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2015.53.00.png)

#### 卸载脚本

自动卸载脚本中文

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```





### 安装 Ruby



#### 安装 Ruby

系统自带的 `2.6.0` 版本好像会出错，使用 Homebrew 安装更高版本 `3.1.0`

```bash
brew install ruby
```

![截屏2022-10-09 16.01.40](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2016.01.40.png)

查看版本，官方版本 2.6.3 是 Mac 自带版本

```bash
ruby -v

ruby 2.6.3p62 (2019-04-16 revision 67580) [universal.x86_64-darwin20]
```

需要将 ruby 3.1.2 可执行文件导入全局变量 PATH 中

```bash
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```



重启终端后

查看是不是 3.1.2 版本（跟使用的终端配置环境有关，zsh 或 bash，可以切换查看）

![截屏2022-10-09 16.05.51](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2016.05.51.png)

#### 卸载 Ruby



⚠️	Mac 系统自带的 ruby `2.6.0` 不要卸载

```bash
// brew 安装的所有库
brew list

// 查看 brew 安装的库用树状图来输出
brew deps --tree --installed

// 列出 ruby 在 brew 当中的下载文件
brew list ruby

// 强制卸载 ruby 命令
brew uninstall --force ruby

// 清除 ruby 依赖文件
brew autoremove

```

![截屏2022-10-09 16.36.46](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2016.36.46.png)

### 安装 Jekyll





使用 gem 来安装 Jekyll，

```bash
gem install bundler jekyll
```

`gem`是一个Ruby程序，用来管理Ruby包的。

安装成功

![截屏2022-10-09 17.18.56](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2022-10-09%2017.18.56.png)

调整`gem`的运行环境

```bash
echo 'export PATH="$HOME/.gem/ruby/3.1.0/bin:$PATH"' >> ~/.bash_profile
```

`3.1.0` 要修改成 ruby 版本的前两位，目前版本是 3.1.2，所以修改为 `3.1.0`



想要查看你的Jekyll版本，执行下面命令之一：

```bash
jekyll --version
gem list jekyll
```





新建一个示例用的 Jekyll 项目

```ruby
jekyll new my-awesome-site

cd my-awesome-site

~/my-awesome-site $ bundle exec jekyll serve

# => 打开浏览器 http://localhost:4000
```



升级 Jekyll 到最新版本命令

```ruby
gem update jekyll
```





#### 卸载

```ruby
gem uninstall jekyll
```



### 问题



MacBook Pro 13款 安装 Jekyll 成功后一直无法运行，尝试多次没有效果。先不折腾了，只写内容同步到 iCloud ，再使用 iMac  发布管理。



查看终端当前环境

```bash
echo $SHELL
```

从 zsh 切换到 bash

```bash
chsh -s /bin/bash
```

从 bash 切换到 zsh

```bash
chsh -s /bin/zsh
```



