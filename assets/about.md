---
layout: post
title: "Hello 2021 我的新建博客"
subtitle: "My new blog"
date: 2021-01-07
author: "Carl"
header-img: "img/post-bg.jpg"
header-style: text
tags:
  - 生活
  - 博客
  - 学习
---



### New Blog



之前用 hexo 建过一个博客，但是没有持续更新。



这是第二次建立个人博客了，希望记录平时折腾和学习的笔记。



2021年了，希望这是一个好的开始！



### Jekyll 文章

进入博客所在目录

```ruby
cd /Users/Carl/Documents/Blog
```

使用 [Rake](https://github.com/ruby/rake) 简化创建文章方式：

```ruby
rake post title="文件存储标题" subtitle="文章副标题"
```

这个命令将在 `_posts/` 文件夹中生成示例类似文章。

文章分类标签

```bash
tags: 
	- Apple
	- 家居
	- 数码
	- 生活
	- 工具
	- 博客
	- 学习
	- 软件
```

更多高级配置：

标题背景图样式纯白，例如本文：

```ruby
header-style: text
```

打开公式 Latex 支持：

```ruby
mathjax: true
```

在标题背景图片中添加遮罩：

```ruby
header-mask: 0.3
```

标题背景图片设置：

```ruby
header-img: "img/post-bg.jpg"
```



Etc.



### 发布博客



通过 macOS 终端（terminal）将远程仓库克隆到本地

```ruby
# cd 到需要存放的文件夹，克隆 GitHub 仓库到本地
cd /Users/Carl/Documents/Blog # 这是我电脑存放博客的位置
git clone git@github.com:CarlCit/carlcit.github.io.git
```

通过 macOS 终端（terminal）将本地博客更新到 GitHub 仓库


```ruby
# cd 到存放博客的文件夹
cd /Users/Carl/Documents/Blog # 这是我电脑存放博客的位置
jekyll build  # 构建站点并将静态站点输出到名为 _site 的目录

# 将库与本地合并
git pull --rebase origin main

# 提交到 GitHub 仓库
git add .  # 添加到暂存区
git commit -m "提交注释"  # 提交到本地仓库，注释说明
git push origin main  # 提交到线上站点部署在 main 下面
```

通过 macOS 终端（terminal）将远程仓库修改更新到本地

```ruby
cd /Users/Carl/Documents/Blog # 这是我电脑存放博客的位置
git pull origin # 将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并
```

MacBook Pro 本地博客文件夹

~~~ruby
cd /Users/Carl/Library/Mobile\ Documents/com\~apple\~CloudDocs/Blog
~~~





### 图片压缩工具

**TinyPNG4Mac**

[https://github.com/kyleduo/TinyPNG4Mac](https://github.com/kyleduo/TinyPNG4Mac)

（使用的 https://tinify.cn/ 压缩，API 邮箱 me.com）



### 图床工具

**PicGo**

[https://github.com/Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo)

使用的阿里云OSS



### 分类

Apple	家居	数码	生活	工具	博客	学习	软件

