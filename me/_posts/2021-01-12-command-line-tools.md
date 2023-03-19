---
layout: post
title: "macOS 命令工具 Command Line Tools"
subtitle: "介绍、安装、使用"
date: 2021-01-12
author: "Carl"
header-img: "img/post-bg.jpg"
tags: 
  - Apple
  - Terminal
  - 软件
---



### 简单介绍



通过 Terminal 访问 Unix 工具包的 Mac 用户，会选择安装 Xcode IDE 的可选命令行工具子部分 Command Line Tools。



从 MacOS High Sierra，Sierra，OS X El Capitan，Yosemite，Mavericks 开始，无需先安装整个Xcode软件包，也无需登录开发人员帐户，就可以单独安装Command Line Tools。



Command Line Tools 就是一个小型独立包，为 Mac 终端用户提供了许多常用的工具，实用程序和编译器。包括 svn，git，make，GCC，clang，perl，size，strip，strings，libtool，cpp，what 以及其他很多能够在 Linux 默认安装中找到的有用的命令。



后面会列出这个工具包中完整的命令列表，也可以自己安装完后亲自查看。



### 安装



1. 启动 terminal 或者 iterm 终端
2. 输入以下命令字符串

```bash
xcode-select --install
```

会出现以下弹窗，点击安装即可

![clt1.png](https://segmentfault.com/img/bVbmZJR)

1. 接着会有一个同意服务条款弹出，点击同意即可

![clt2.jpeg](https://segmentfault.com/img/bVbnSyZ)

1. 等待下载

![clt3.jpeg](https://segmentfault.com/img/bVbnSyY)

1. 完成安装后会提示安装完成，点击安装完成即可。

![clt4.jpeg](https://segmentfault.com/img/bVbnSyW)

1. 然后可以通过尝试使用刚安装的命令之一来确认是否安装成功，例如

```bash
gcc -v
git version
```

![clt5.jpeg](https://segmentfault.com/img/bVbnSyX)

#### 这个包实际安装路径

如果你对这个包中到底有什么东西感兴趣，可以自己查看这个包中的内容。它安装在mac的根目录中

```
/Library/Developer/CommandLineTools/
```



108 个可用的新命令，都在```/Library/Developer/CommandLineTools/usr/bin```中。

列出这些命令：

```bash
CarliMac:bin Carl$ ls
2to3				lldb
2to3-3.8			llvm-cov
DeRez				llvm-cxxfilt
GetFileInfo			llvm-dwarfdump
ResMerger			llvm-nm
Rez				llvm-objdump
SetFile				llvm-otool
SplitForks			llvm-profdata
ar				llvm-size
as				lorder
asa				m4
bison				make
bitcode_strip			mig
c++				nm
c++filt				nm-classic
c89				nmedit
c99				objdump
cc				otool
clang				otool-classic
clang++				pagestuff
clangd				pip3
cmpdylib			pip3.8
codesign_allocate		projectInfo
codesign_allocate-p		pydoc3
cpp				pydoc3.8
ctags				python3
ctf_insert			python3.8
dsymutil			ranlib
dwarfdump			resolveLinks
dwarfdump-classic		rpcgen
dyldinfo			segedit
easy_install-3.8		size
flex				size-classic
flex++				sourcekit-lsp
g++				stapler
gatherheaderdoc			strings
gcc				strip
gcov				swift
git				swift-build
git-receive-pack		swift-demangle
git-shell			swift-package
git-upload-archive		swift-run
git-upload-pack			swift-stdlib-tool
gm4				swift-symbolgraph-extract
gnumake				swift-test
gperf				swiftc
hdxml2manxml			tapi
headerdoc2html			tapi-analyze
indent				unifdef
install_name_tool		unifdefall
ld				unwinddump
lex				vtool
libtool				xml2man
lipo				yacc
```





