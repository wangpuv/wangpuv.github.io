---
layout:         post
title:          在Mac中搭建这样的博客环境
category:       blog
description:    之前介绍了在 windows 环境搭建这样的博客环境，那么在 Mac 电脑上该怎么做呢？
---

## 我与Mac不期而遇

2012年 ipad 已经火遍大街小巷，我也买了一个 ipad2 作为情人节礼物送给自己的爱人。

其实，这不是我第一次买 apple 的产品，第一次是一台 ipod nano4，竟然也是送给她的。也许在我之前的印象里，apple 的产品外观绚丽，操作极易上手，更适合女孩子使用吧。

但是，在使用 ipad2 一年半以后，我更换笔记本的时候，竟然选择了2013款的 AIR，在使用之后更是让我相信，它就是我想要的。

## 在Mac上搭建本地博客环境

之前在 windows 上搭建本地博客环境的博客：[我的这个博客是怎样搭建起来的][1]。

好了，废话不多说，来讲讲我是怎样在这台 AIR 上搭建 [jekyll][] 博客环境的。

[jekyll][] 需要 Ruby 开发环境，所以安装 ruby 是必须的，其实 OS X 已经自带了ruby，不过版本可能比较老，我想安装一个1.9.3，参考的是这篇博客：

* [在Mac OS X Lion下安装Ruby on Rails][3]

原以为应该是很简单的事情，但是没想到竟然折腾了5，6个小时，网速太慢占了很大一部分原因。

### 1.安装 Xcode 及 Command Line Tools

你需要先安装 Xcode，然后打开 Xcode，然后按快捷键：command ＋ ，会弹出配置项，找到  Downloads，安装 Command Line Tools。

### 2.安装 git

我手动安装了 [git-osx-installer][]，注意看一下里面的说明，可以根据你的情况，选择执行 setup git PATH for non-terminal programs.sh。

安装完，可以试一下是否安装成功：

    $ git --version
    git version 1.8.3.2

### 3.安装 ruby

参考之前提到的博客，执行命令安装 rvm：

	$ bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)

然后，配置一下你的用户的环境变量：

	$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" ' >> ~/.bash_profile
	$ source ~/.bash_profile
	
检查一下是否安装成功：

	$ type rvm | head -1
	rvm is a function
	
接下来就是安装 ruby 了：

	$ rvm install 1.9.3

好吧，就是这个命令让我苦等了1个多小时，还没有结束。

后来，查了一下发现，原来是它自动安装了 [MacPorts][],而 [MacPorts][] 需要下载所有需要的依赖，并编译安装，网速比较慢的情况下，耗时很长。

参考下面这篇博客：

* [忘掉恶心丑陋的MacPorts吧, 现在有了Homebrew][4]

我终止了安装，然后卸载了 [MacPorts][]，安装了 [Homebrew][]。

安装好以后，再尝试执行：

	$ rvm install 1.9.3

还是需要苦等半个多小时，安装一大堆包。

在此期间，我又发现了一个很好的工具：[JewelryBox][]，它可以在图形界面里安装和管理 ruby。不过这个时候，我已经安装完了，所以也就没试用。有兴趣，你可以试试。

安装完成以后，将这个版本设置为默认：

	$ rvm use 1.9.3

### 4.安装 jekyll 

rvm 在安装 ruby 的时候也安装了 gem，查看一下版本：

	$ gem -v
	2.0.7

那就开始安装 [jekyll][]：

	$ gem install jekyll
	
但是安装到最后的时候竟然报错，具体是什么原因我没有继续查，试了试，[jekyll][] 已经可以使用了。

## 终于安装好了

对于我这个 Mac 新手来说真心不容易，不过能在 AIR 上写博客了，也很开心。

[jekyll]:       http://jekyllrb.com/                                    "jekyll"
[git-osx-installer]:       https://code.google.com/p/git-osx-installer/                                     "git-osx-installer"
[MacPorts]:       http://www.macports.org/install.php                                     "MacPorts"
[Homebrew]:       http://brew.sh/                                     "Homebrew"
[JewelryBox]:       http://jewelrybox.unfiniti.com］/                                     "JewelryBox"
[1]:            {{ page.url}}                                           ({{ page.title }})
[2]:            http://wangpuv.com/get-git-blog/             "我的这个博客是怎样搭建起来的"
[3]:				http://www.hoowolf.net/2012/03/29/installing-ruby-on-rails-on-mac-os-x-lion/	"在Mac OS X Lion下安装Ruby on Rails"
[4]:            http://liang.eu/mac/forgot-macports-now-we-have-homebrew             "忘掉恶心丑陋的MacPorts吧, 现在有了Homebrew"