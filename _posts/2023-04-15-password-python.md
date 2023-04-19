---
layout: post
title: "使用Python程序生成密码"
subtitle: "macOS+Python"
date: 2023-04-15
header-style: text
author: "Carl"
tags: [macOS,软件,Python]
---

使用 AI 编写 Python 代码生成密码文件



## Cursor

[官网](https://www.cursor.so)

[GitHub](https://github.com/getcursor/cursor)

**[Cursor](https://cursor.so/) is an editor made for programming with AI.** It's early days, but right now Cursor can help you with a few things...

- **Write**: Generate 10-100 lines of code with an AI that's smarter than Copilot
- **Diff**: Ask the AI to edit a block of code, see only proposed changes
- **Chat**: ChatGPT-style interface that understands your current file
- **And more**: ask to fix lint errors, generate tests/comments on hover, etc.



**生成 8 位纯数字密码组合**（大小 900M）

```python
下面是一个生成 8 位数字和小写字母混合的密码字典文件的 Python 程序，你可以根据需要修改密码长度和生成的字典文件名。这个程序可以生成所有可能的 8 位密码组合，其中的字符包括数字和小写字母。

import itertools

# 生成所有 8 位密码组合
characters = "0123456789abcdefghijklmnopqrstuvwxyz"
passwords = itertools.product(characters, repeat=8)

# 把所有密码写入文件
f = open("passwords.txt", "w")
for password in passwords:
    f.write("".join(password) + "\n")
f.close()

在这个程序中，我们使用 Python 标准库中的 itertools 模块中的 product 函数生成了所有 8 位数字和小写字母混合的密码组合。然后我们将所有密码写入到一个名为 passwords.txt 的文件中。

需要注意的是，生成的字典文件可能会非常大，具体取决于密码长度和密码字符集大小，需要注意存储空间的占用。
```

**生成8位数字和小写字母组合密码** （大小 14G）

```python
下面是一个生成 8 位数字密码字典文件的 Python 程序，你可以根据自己的需要修改密码长度和生成字典文件的文件名。这个程序可以生成所有可能的 8 位数字密码组合的字典文件。

import itertools

# 生成所有 8 位数字密码组合
digits = "0123456789"
passwords = itertools.product(digits, repeat=8)

# 把所有密码写入文件
f = open("passwords2.txt", "w")
for password in passwords:
    f.write("".join(password) + "\n")
f.close()

在这个程序中，我们使用 Python 标准库中的 itertools 模块中的 product 函数生成了所有 8 位数字密码组合。然后我们将所有密码写入到一个名为 passwords.txt 的文件中。

需要注意的是，生成的字典文件可能非常大，具体取决于密码长度和密码字符集大小，需要注意存储空间的占用。
```





## Hashcat

破译

```zsh
hashcat -a 0 -m 22000 -D 2 5025.hccapx passwords.txt
```

纯数字破译需要 `12分钟`

数字和小写字母破译需要 `20小时`



这个速度比使用  aircrack-ng 快太多了。
