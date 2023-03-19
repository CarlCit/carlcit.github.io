---
layout: post
title: "R2S 添加风扇控制和 OLED 屏幕"
subtitle: "R2S + start-rk3328-pwm-fan.sh"
date: 2021-11-20
author: "Carl"
tags: 
  - R2S
  - 数码
  - OpenWrt
---



R2S刷OpenWtr固件后添加风扇控制，通过CPU温度来控制风扇开启与关闭。

卖家发货商品掉了一颗电阻，自己补上。

![IMG_3915](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/IMG_3915.jpeg)



风扇低于 51度停，高于 52度工作。

![IMG_4020](https://github-blog-carl.oss-cn-hangzhou.aliyuncs.com/img/IMG_4020.jpeg)



## 风扇控制

1、<https://github.com/friendlyarm/friendlywrt/blob/master-v19.07.1/target/linux/rockchip-rk3328/base-files/usr/bin/cputemp.sh>

2、<https://github.com/friendlyarm/friendlywrt/blob/master-v19.07.1/target/linux/rockchip-rk3328/base-files/usr/bin/start-rk3328-pwm-fan.sh>

### 安装风扇插件

```bash
# 打开上面 2个文件网页
# ssh 登陆软路由

# 进入第一个文件 /usr/bin/ 目录

FusionWrt# cd /usr/bin/

# 创建并编辑文件 start-rk3328-pwm-fan.sh（内容在下面）

FusionWrt# vi start-rk3328-pwm-fan.sh

# 查看文件内容

FusionWrt# cat start-rk3328-pwm-fan.sh

# 给文件设置权限

FusionWrt# chmod 777 start-rk3328-pwm-fan.sh

# 查看文件属性（权限开启 rwx）

FusionWrt# ls -lh start-rk3328-pwm-fan.sh

-rwxrwxrwx 1 root root 1.4K Nov 19 16:19 start-rk3328-pwm-fan.sh

# 第一个完成，操作第二个

# 进入第二个文件 /etc/init.d/ 目录

FusionWrt# cd /etc/init.d/

# 创建并编辑文件（内容在下面）

FusionWrt# vi fa-rk3328-pwmfan

# 查看文件内容

FusionWrt# cat fa-rk3328-pwmfan

# 给文件设置权限

FusionWrt# chmod 777 fa-rk3328-pwmfan

# 查看文件属性（权限开启 rwx）

FusionWrt# ls -lh fa-rk3328-pwmfan

```



```bash
# 强制删除文件

rm -f /var/log/httpd/access.log

# 删除目录及文件

rm -rf /var/log/httpd/access
```



### 添加到启动项

```bash
/etc/init.d/fa-rk3328-pwmfan enable
/etc/init.d/fa-rk3328-pwmfan start
```

添加后就可以开机启动风扇了

### 文件

#### start-rk3328-pwm-fan.sh

```bash
#!/bin/bash

if [ ! -d /sys/class/pwm/pwmchip0 ]; then
    echo "this model does not support pwm."
    exit 1
fi

if [ ! -d /sys/class/pwm/pwmchip0/pwm0 ]; then
    echo -n 0 > /sys/class/pwm/pwmchip0/export
fi
sleep 1
while [ ! -d /sys/class/pwm/pwmchip0/pwm0 ];
do
    sleep 1
done
ISENABLE=`cat /sys/class/pwm/pwmchip0/pwm0/enable`
if [ $ISENABLE -eq 1 ]; then
    echo -n 0 > /sys/class/pwm/pwmchip0/pwm0/enable
fi
echo -n 50000 > /sys/class/pwm/pwmchip0/pwm0/period
echo -n 1 > /sys/class/pwm/pwmchip0/pwm0/enable

# max speed run 5s
echo -n 46990 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle
sleep 5
echo -n 25000 > /sys/class/pwm/pwmchip0/pwm0/duty_cycle

# declare -a CpuTemps=(55000 43000 38000 32000)
# declare -a PwmDutyCycles=(1000 20000 30000 45000)

declare -a CpuTemps=(75000 63000 58000 52000)
declare -a PwmDutyCycles=(25000 35000 45000 46990)

declare -a Percents=(100 75 50 25)
DefaultDuty=49990
DefaultPercents=0

while true
do
	temp=$(cat /sys/class/thermal/thermal_zone0/temp)
	INDEX=0
	FOUNDTEMP=0
	DUTY=$DefaultDuty
	PERCENT=$DefaultPercents
	
	for i in 0 1 2 3; do
		if [ $temp -gt ${CpuTemps[$i]} ]; then
			INDEX=$i
			FOUNDTEMP=1
			break
		fi	
	done
	if [ ${FOUNDTEMP} == 1 ]; then
		DUTY=${PwmDutyCycles[$i]}
		PERCENT=${Percents[$i]}
	fi

	echo -n $DUTY > /sys/class/pwm/pwmchip0/pwm0/duty_cycle;

        echo "temp: $temp, duty: $DUTY, ${PERCENT}%"
        # cat /sys/devices/system/cpu/cpu*/cpufreq/cpuinfo_cur_freq

	sleep 2s;
done
```



#### fa-rk3328-pwmfan

```bash
#!/bin/sh /etc/rc.common

START=96
 
start() {
	echo "fa-pwmfan started"
	/usr/bin/start-rk3328-pwm-fan.sh > /dev/null&
}

```





## OLED屏幕



### 下载插件

作者：https://github.com/natelol/luci-app-oled

进入仓库下载 ipk 文件即可 [luci-app-oled_0.9-0.9_all.ipk](https://github.com/NateLol/luci-app-oled/releases)



### 安装

进入 OpenWrt 页面，系统 > 文件传输 > 上传 > 列表安装即可



