---
layout: post
title: "Jekyll博客Markdown的Kramdown解析器"
subtitle: "编辑器常用语法"
date: 2021-01-13
author: "Carl"
mathjax: true
header-img: "img/post-bg.jpg"
tags: 
  - 博客
  - Jekyll
  - Markdown
---



### 简介

kramdown 是一个用 Ruby 实现的 Markdown 的解析器。

Markdown 是一种轻量型标记语言， 其目的在于为以网页为载体的文章的排版提供一种较 HTML 来说更简便、更安全、可读性更强的书写方式。它并不是HTML 的替代品，使用 Markdown 的语法编写的文章最终都要通过其翻译器转换成 HTML 代码。Github Pages 采用 Kramdown 解析器，所以当前这个博客是推荐使用这个语法。



> Kramdown	[官网链接](https://kramdown.gettalong.org/documentation.html)；	[语法文档中文翻译](http://pikipity.github.io/blog/kramdown-syntax-chinese-1.html)

> Markdown	[语法文档](https://daringfireball.net/projects/markdown/syntax)；	[ 中文说明文档PDF](http://alfred-sun.github.io/media/documents/MarkDown轻量级标记语言.pdf)



kramdown 语法是基于 Markdown 语法建立并加入了一些其他 Markdown 扩展版本（例如，Maruku、PHP Markdown Extra 和 Pandoc）所具有的特性。不仅如此，它努力去提供一个包括明确规则的严格的语法，所以它不可能完全符合 Markdown 语法。尽管如此，大多数用 Markdown 编写的文档依然可以用 kramdown 很好地解析。



### 源文件文本格式

一个 kramdown 文本可以支持多种编码格式，比如 ASCII、UTF-8 和 ISO-8859-1，并且会将他们转化为和你源文件同样的编码格式。



### Tab 的使用

krandown 定义 tab 是四个空格，当在在列表的行首空格使用 tab 的时候，这点非常重要。并且，tab 只可以在行首使用，不可以用来代替空格，否则结果不可预测。



### atx 风格标题 {#header}

```
~~~
#         一级
##
###
####
#####
######    六级
~~~
```



### 指定标头ID（`{#head_id}`）

```html+django
###### I can help you  {#head_1}
```

###### I can help you  {#head_1}



### 引用

```
> 引用文本
```

> 引用文本



### 空行

```text
`<br>` or 两个空格
```



### Code

```text
~~~
# Code
~~~
```

~~~basic
# Code
~~~



### 清单

```abap
* kram
+ down
- now

> 注意缩进
```

* kram
+ down

- now



### 表格

```text
| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |
```

| Header One | Header Two |
| :--------- | :--------- |
| Item One   | Item Two   |



### 分割线

```text
***
```

***



### HTML块

```text
~~~ html
script style math option textarea pre code kbd samp var
~~~
```

~~~ html
script style math option textarea pre code kbd samp var
~~~



### 链接和图像

```text
# 自动链接(尖括号)
<me.example@example.com>

# 内联链接
[link](http://xxx.com)

# 图片
![img](http://xxx/1.img)

# 由于可以通过span和块IAL添加其他属性，因此可以指定图像宽度和高度
![smiley](http://xxx/1.img){:height="36px" width="36px"}
```

<me.example@example.com>

[link](http://xxx.com)

![img](http://xxx/1.img)

![smiley](http://xxx/1.img){:height="36px" width="36px"}



### 重点

```text
*some text*
_some text_
**some text**
__some text__
```

*some text*
_some text_
**some text**
__some text__



### 单行代码

```python
`code`
```

`code`



### 脚注

```text
人有悲欢离合，月有阴晴圆缺.[^1]

[^1]: 《水调歌头》
```

人有悲欢离合，月有阴晴圆缺.[^1]

[^1]: 《水调歌头》



### 公式



页面支持公式功能开启，在头文件添加：

```
mathjax: true
```



公式代码：

```latex
$$
f(n) =
\begin{cases}
0 && (n=0)\\
1 && (n=1)\\
f(n-1)+f(n-2) && (n\ge2)\\
\end{cases}
$$
```

效果：

$$
f(n) =
\begin{cases}
0 && (n=0)\\
1 && (n=1)\\
f(n-1)+f(n-2) && (n\ge2)\\
\end{cases}
$$



LaTex的数学公式基本规则

```
$E = mc^2 $
$\boxed{E=mc^2}$
$\fbox{E=mc^2}$
$\mathbf{E = mc^2}$
$\boldsymbol{E = mc^2}$
```

$E=mc^2$ ｜ 
$\boxed{E=mc^2}$ ｜ 

$\fbox{E=mc^2}$ ｜ 

$\mathbf{E = mc^2}$ ｜ 
$\boldsymbol{E = mc^2}$

```
$ H_{2}O $
```

$ H_{2}O $

```
$ X^2 $
```


$X^2$

$ 表示行内公式：

质能守恒方程可以用一个很简洁的方程式 `$ E=mc^2 $` 来表达：$ E=mc^2 $ 。

$$ 表示整行公式：

```
$$ \sum_{i=1}^n a_i=0 $$
$$ \sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k} $$
```

公式1

$$ \sum_{i=1}^n a_i=0 $$

公式2

$$ \sum^{j-1}_{k=0}{\widehat{\gamma}_{kj} z_k} $$



在Markdown中将数学表达式放置在 $...$ 之间：

```
$\LaTeX{}$

$\Pi$

$ a * b = c ^ d $

$ 2^{\frac{n-1}{3}} $

$ \int\_a^b f(x)\,dx.$
```


效果：


$\LaTeX{}$

$\Pi$

$ a * b = c ^ d $

$ 2^{\frac{n-1}{3}} $

$ \int\_a^b f(x)\,dx.$

