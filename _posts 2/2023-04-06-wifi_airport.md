---

layout: post
title: "macOS破解Wi-Fi密码教程"
subtitle: "WiFi+airport+aircrack-ng"
date: 2023-04-06
author: "Carl"
header-img: "img/post-bg.jpg"
header-style: text
tags: [WiFi,macOS,软件]

---



破解环境

电脑：MacBook Pro 16 M1 Pro

系统：macOS Ventura 版本是 13.3



## 安装软件

需要安装一些必要软件，分别如下：

由于使用 MacPorts 安装 aircrack-ng 总是报错失败，最后选择的 Homebrew 安装更方便简单，没有报错。[Homebrew 安装方法](https://songlin.me/2021/11/25/homebrew-install/)



### ~~MacPorts~~

> MacPorts 是一个开源软件项目，旨在帮助 macOS 用户方便地安装和管理各种 Unix/Linux 软件包和依赖项，而无需手动编译和安装它们。

> 使用 MacPorts，你可以轻松地获取和安装数千个开源软件包，包括 C、C++、Fortran、Python、Ruby、Perl 等各种编程语言的软件包。MacPorts 支持自动解决依赖项，并可与 macOS 系统的软件包管理器 Homebrew 兼容。

> MacPorts 是一个命令行界面工具，通过 Portfile 文件描述软件包的构建过程，这些文件存储在 MacPorts 树中，可以轻松访问和操作。你可以使用 MacPorts 搜索和安装新软件包，也可以更新和卸载已经安装的软件包。

[官方网站](https://www.macports.org/index.php) 直接进官网下载自己对应系统版本

我下载的 Apple 芯片版本 pkg 安装包

[GitHub下载](https://github.com/macports/macports-base/releases/tag/v2.8.1) ｜ [MacPorts-2.8.1-13-Ventura.pkg](https://github.com/macports/macports-base/releases/download/v2.8.1/MacPorts-2.8.1-13-Ventura.pkg)

安装后，使用 terminal 更新 MacPorts

```zsh
sudo port selfupdate
```

更新成功，如下图：

![截屏2023-04-07 00.01.19](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070001750.png)

#### 卸载 MacPorts

卸载 MacPorts 可以分为两个步骤：卸载 MacPorts 软件本身和卸载安装的软件包。以下是卸载 MacPorts 的步骤：

1. 卸载 MacPorts 软件本身

打开终端应用程序，依次输入以下命令：

```zsh
//卸载所有端口
sudo port -fp uninstall installed

//删除用户和组
sudo dscl . -delete /Users/macports
sudo dscl . -delete /Groups/macports

//删除MacPorts的其余部分
sudo rm -rf \
    /opt/local \
    /Applications/DarwinPorts \
    /Applications/MacPorts \
    /Library/LaunchDaemons/org.macports.* \
    /Library/Receipts/DarwinPorts*.pkg \
    /Library/Receipts/MacPorts*.pkg \
    /Library/StartupItems/DarwinPortsStartup \
    /Library/Tcl/darwinports1.0 \
    /Library/Tcl/macports1.0 \
    ~/.macports

```

这会卸载 MacPorts 以及其依赖项，并删除所有相关文件和目录。如果你安装了其他版本的 MacPorts，也需要执行以上命令以卸载。

2. 卸载安装的软件包

如果你已经使用 MacPorts 安装了一些软件包，你可以使用以下命令卸载它们：

```zsh
sudo port -fp uninstall [软件包名称]
```

将 `[软件包名称]` 替换为你需要卸载的软件包名称。如果你想卸载所有安装的软件包，可以使用以下命令：

```zsh
sudo port -fp uninstall installed
```

以上就是在 macOS 上卸载 MacPorts 的步骤。



### Aircrack-ng

> Aircrack-ng 是一款用于破解无线网络密码的开源工具，它可以通过采集无线网络的数据包并通过暴力破解等方式来猜测出无线网络的密码。它是一个非常受欢迎的无线网络安全工具，可以用于评估无线网络的安全性、测试无线网络的弱点、检测无线网络攻击等，是网络安全工程师和渗透测试员必备的工具之一。

>Aircrack-ng 工具主要包含以下几个功能：
>1. 无线网络抓包：可以通过无线网卡进行数据包抓取并进行保存。
>2. 密码破解：可以使用字典攻击、暴力破解等方法破解无线网络密码。
>3. 子功能支持：可以通过支持多个插件和子工具来增强其功能。
>4. 易用性：具有简单的命令行界面，易于使用。





在 macOS 上安装 aircrack-ng 需要使用类似 MacPorts 或 Homebrew 的软件包管理器。以下是使用 MacPorts 和 Homebrew 安装 aircrack-ng 的步骤：

使用 MacPorts 安装 aircrack-ng

多次安装失败

![截屏2023-04-07 00.18.59](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070022868.png)

使用 Homebrew 安装 aircrack-ng

1. 安装 Homebrew：前往官方网站 (https://brew.sh/index_zh-cn) 查看如何安装 Homebrew。

   ![截屏2023-04-07 00.20.02](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070023619.png)

2. 更新 Homebrew：在终端应用程序中输入以下命令以更新 Homebrew：

```
brew update
```

3. 安装 aircrack-ng：在终端应用程序中输入以下命令以安装 aircrack-ng：

```
brew install aircrack-ng
```

4. 等待安装：等待终端应用程序下载和安装 aircrack-ng 及其依赖项。安装完成后，你可以使用 aircrack-ng 来破解无线网络密码。

安装成功

![截屏2023-04-07 00.20.24](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070024103.png)

更新成功

![截屏2023-04-07 00.20.37](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070025296.png)

以上就是在 macOS 上使用 MacPorts 和 Homebrew 安装 aircrack-ng 的步骤。不过需要注意的是，使用 aircrack-ng 破解无线网络密码是非法行为，在未经授权的情况下使用可能会违反法律法规，因此请谨慎使用。



#### 卸载 aircrack-ng

使用 MacPorts 卸载 aircrack-ng

```zsh
port list //列出当前所有的可用软件
port clean --all all  //删除一些编译软件时留下的临时文件
port installed //列出全部或者指定的已经安装的软件
sudo port -fp uninstall aircrack-ng //卸载 aircrack-ng
sudo port -fp uninstall installed //卸载全部软件包
```



使用 Homebrew 卸载 aircrack-ng

```zsh
brew uninstall aircrack-ng
```



### Airport

>在 macOS 操作系统中，airport 是一个用于管理无线局域网的命令行工具。 它可以用来扫描无线网络并显示他们的各种详细信息，如网络名称、频率、信号强度等，也可以通过它连接、断开和管理无线网络设置和选项。

>以下是一些常见的 airport 命令：

>1. airport -s：扫描可用的无线网络并列出它们的详细信息，可以看到网络名称、信号强度、加密等信息。
>2. airport -I：列出当前已连接的无线网络的详细信息，包括无线接口名称、MAC 地址、IP 地址等。
>3. airport -z：断开当前连接的无线网络。
>4. airport -A：以管理员权限启动 AirPort 实用程序。
>5. airport -c channel：设置无线网络的频道。

>请注意，在使用 airport 命令时，请确保使用正确的权限和参数，以避免不必要的问题。



macOS 系统自带 airport 工具软件，默认路径为：`/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport  `



运行这个软件命令路径太长，使用环境变量缩短成 airport，执行下面 terminal 命令：

```zsh
//修改 ~/.zshrc 文件

//将下面代码添加到文件对应位置
alias airport="/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport"

//使配置生效
source ~/.zshrc
```

另外一种添加方式（这种添加好像更好，可以显示 BSSID，上面方法无法使用 sudo）

```zsh
sudo ln -s /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport /usr/local/bin/airport
```



使用 terminal 命令  获取附近的 Wi-Fi 信号列表：

```zsh
sudo airport -s
```



查看下图 Wi-Fi 信号列表

`SSID` 是 Wi-Fi 名称，`BSSID` 设备硬件地址，`RSSI` 是信号强度，`CHANNEL` 是信道

![截屏2023-04-07 00.33.49](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070053290.png)







## 准备工作

### 网卡

查看本电脑无线网卡信息，terminal 命令：

```zsh
ifconfig
```

无线网卡基本为 `en0`

还有一个方法查看，按住键盘 `option` 键，再点击菜单栏 `Wi-Fi 图标`，会出现网卡信息。



### 密码字典

需要用到密码字典，下载资源 `321.txt` 保存到 Downloads 下面的 wifi 文件夹中。

密码字典根据自己需要网上下载，这是两个密码 GitHub 库：

[password_brute_dictionary](https://github.com/zxcvbn001/password_brute_dictionary)；[wpa-dictionary](https://github.com/conwnet/wpa-dictionary)

将下载的字典文件 `321.txt` 放在文件夹中，我的文件夹路径。

```
/Users/Carl/Downloads/wifi
```

多个字典文件可以轮换着尝试





## 开始破解



### 文件夹

打开 terminal 使用命令进入密码字典文件夹目录

```zsh
cd /Users/Carl/Downloads/wifi
```



### 抓包

获取 Wi-Fi 列表信息

```zsh
sudo airport -s
```

![截屏2023-04-07 00.33.49](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070053290.png)

使用下面命令抓包

电脑网卡： `en0`

监听信道：`36` （信道选择根据上面获取的wifi列表想要连接的）

```zsh
sudo airport en0 sniff 36
```

如果提示错误，权限不够

```
airport en0 sniff 36                                                         
Could not open device en0 (en0: You don't have permission to capture on that device ((cannot open BPF device) /dev/bpf0: Permission denied)).

执行下面命令
cd /dev
ls -la | grep bp
whoami  //查看当前的用户名
sudo chown 上面看到的用户名:admin bp*
```



监听之后，Wi-Fi 图标会变化，使用 `control + C` 停止监听，系统会将监听到的数据 cap 文件保存到本地 `/tmp` 文件夹下。打开 cap 文件，查看 cap 文件中的数据是否被抓取到，输入命令查看：

```zsh
sudo aircrack-ng /tmp/airportSniffxxxxx.cap
```

![截屏2023-04-07 00.59.48](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304070059611.png)



如果要查询的路由列表的  Encryption 中（0 handshake）是抓包失败，（1 handshake）则是抓包成功，否则要重新抓取。抓包时需要刚好这段时间有人重新连接了 wifi 才能抓到 WPA（1 handshake）的数据。

需要在晚上连接比较频繁的时候抓包，不然等待的时间也会很长。



### 破解

抓包成功后就可以开始破解了

字典文件：`321.txt`

握手包：`/tmp/airportSniffxxxxxx.cap` 将包文件移动到刚刚创建的 wifi 文件夹中

破解命令如下：

```zsh
sudo aircrack-ng -w 321.txt airportSniffxxxxxx.cap
```

抓包成功图：

![截屏2023-04-07 08.05.07](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304071504006.png)



提示 `Index number of target network ?` 时，输入 Encryption 中为（1 handshake）数据的行号，这里输入 `8`



等待破解结果…

![截屏2023-04-07 08.37.04](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/202304071504190.png)

中断破解过程 `control + C`





破解成功则会如下图：





## 感受

使用了后发现 密码字典 是非常关键的，M1 Pro 的性能算可以的了，一个 1.2G 的字典需要 3个小时破解有点效率低，而且还没有成功。



## Hashcat

始终没找到有效密码字典，发现一种速度更快的破解方式。



> hashcat 是一种基于 GPU/CPU 的密码破解工具，能够破解各种类型的密码，包括 WPA2-PSK、NTLM、MD5 和 SHA 等哈希算法。它支持多种攻击模式，如字典攻击、暴力攻击、组合攻击、掩码攻击等，并可通过多个处理器和显卡同时工作，效率比传统的密码破解方法高出很多倍。

> 通过在用户密码备份中搜索存储在数据库中的密码直到找到一个可破解的密码，这是一个非常常见的攻击方式。由于许多用户会选择弱密码，如常见的密码和简单的字典单词，因此使用 Hashcat 类工具可以进行强密码策略和驻留异地的策略。

[相关教程](https://songlin.me/2023/04/14/hashcat/)



### 安装

安装 OpenCL 支持库和 GPU 驱动程序

为了让 hashcat 利用 GPU 硬件加速，需要安装 OpenCL 支持库和相应的 GPU 驱动程序。在终端应用中运行以下命令安装 OpenCL 和相应的 GPU 驱动程序：

```zsh
brew install --cask cuda
```

如果您使用的是 AMD GPU，则需要运行以下命令：

```zsh
brew install --cask rocm
```

等待安装完成后，重启系统以确保驱动程序正确加载。



安装 hashcat

在终端应用中运行以下命令安装 hashcat：

```zsh
brew install hashcat
```



显示帮助信息：运行` hashcat --help` 或 `hashcat -h` 可以查看帮助信息。

破解密码：使用 `hashcat -m` 和 $HASH 参数指定使用的哈希算法和哈希值，然后使用 -a 参数来指定攻击模式，然后使用 -w 和 -O 参数优化破解性能。例如：

```zsh
hashcat -m 0 $HASH rockyou.txt
```

其中，-m 0 表示使用 MD5 算法进行破解，rockyou.txt 是字典文件的名称。



我的破解代码

```zsh
hashcat -a 0 -m 22000 -D 2 5025.hccapx passwords.txt

hashcat -a 3 -m 22000 -D 2 602.hccapx '?d?d?d?d?d?d?d?d' --force

hashcat -a 3 -m 22000 -D 2 5022.hccapx '?h?h?h?h?h?h?h?h'

hashcat -a 6 -m 22000 -D 2 5025.hccapx wifi_top2000_passwd.txt '?d?d?d?d?d?d?d?d'
```

### 卸载

删除 hashcat 可执行文件

在终端应用中运行以下命令：

```zsh
sudo rm /usr/local/bin/hashcat
```

删除 hashcat 的配置文件和日志文件

在终端应用中运行以下命令：

```zsh
sudo rm -r ~/Library/Application\ Support/hashcat/
```

删除 hashcat 相关依赖包

在终端应用中运行以下命令：

```zsh
brew uninstall hashcat
```

确认卸载

可以通过运行以下命令确认 hashcat 是否已被卸载：

```zsh
hashcat --version
```



## Hcxpcapngtool

> hcxpcapngtool 是 hcxtools 工具包中的一个子工具，它用于将捕获到的 WiFi 握手数据转换成标准的 PCAPng 文件格式，以便于使用其他工具进行分析和处理。该工具可以在终端中使用。



使用 hcxpcapngtool 工具的基本语法如下：

```zsh
hcxpcapngtool -i <输入文件> -o <输出文件>
```

其中，-i 参数指定输入文件路径，-o 参数指定输出文件路径。例如：

```zsh
hcxpcapngtool -i handshake.pcapng -o handshake_converted.pcapng
```

该命令会将名为 handshake.pcapng 的文件转换为标准的 PCAPng 格式，并保存到 handshake_converted.pcapng 文件中。

除了基本语法之外，hcxpcapngtool 还提供了许多其他的命令选项和参数，可以通过执行 hcxpcapngtool -h 命令来查看帮助信息。



我的转换

```zsh
hcxpcapngtool -o 5022.hccapx 5025G.cap
```



