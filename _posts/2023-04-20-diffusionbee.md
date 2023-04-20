---
layout: post
title: "macOS安装Diffusion Bee生成照片"
subtitle: "macOS+DiffusionBee"
date: 2023-04-20
header-img: "img/post-bg.jpg"
author: "Carl"
tags: [博客]
---

## 安装

[官网](https://diffusionbee.com)

[GitHub](https://github.com/divamgupta/diffusionbee-stable-diffusion-ui)

[下载程序](https://diffusionbee.com/download)

直接下载安装包文件安装就行，和普通安装 dmg 文件程序一样。

## 模型

模型下载网站

[Hugging Face - Diffusion](https://huggingface.co/models?other=stable-diffusion&sort=downloads)

## 卸载

1、删除程序本身 DiffusionBee

2、生成的图像和一些与您可能在主文件夹中导入的自定义模型在 `.diffusionbee/` 文件夹中

终端输入命令，删除缓存、生成的图像、导入的模型

```
rm -r ~/.diffusionbee/
```

