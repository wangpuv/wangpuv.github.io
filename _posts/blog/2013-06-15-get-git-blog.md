---
layout:         post
title:          我的这个博客是怎样搭建起来的
category:       blog
description:    像写代码一样写博客，无限的自由，随意的装饰，这就是 github 博客的好处！你想拥有这样的博客吗？
---

## 我曾经的博客

我曾经搭建过两个博客：

一个是用 [B3log][] 在GAE上搭建的，可惜没用几个月就遇到了伟大的长城防火墙，虽然后来 [B3log][] 的创始人 [DL88250][] 给大家分配的 [B3log][] 的子域名，通过反射代理解决了访问问题，但是仍然感觉很不方便。

第二个是在 SAE 上用 WordPress 搭建的博客，可惜是收费的，很快免费的云豆就用完了，（＋﹏＋）

## 偶遇GitHub

[GitHub][] 流行以后，很多人都推荐使用 [GitHub][] 写博客，“像黑客一样写博客”，“更纯粹的博客”，“自由的世界”等等，赞誉不停。

我了解 [GitHub][] 是阅读了这篇博客：[如何高效利用GitHub][2]。

当然，你要想玩转 [GitHub][] 首先要了解 Git 是什么？你可以看看下面这两本已经翻译成中文的书：

* [ProGit][]
* [GitMagic][]

值得一提的是， Git 的作者是 Linux 的缔造者 Linus Torvalds 领导的 Linux 开源社区。

## 搭建自己的博客

我需要的博客，首先是一个自由的空间，不受任何的约束，可以轻松自由的改变它的呈现方式，完全在自己的掌控之中。 GitHub 正合我意。

怎样搭建呢？先 Google 一把吧！我找到了下面几篇文章：

* [使用Github Pages建独立博客][3]
* [使用github作为博客引擎][4]

如何搭建，这两篇文章里面已经讲的很明白了，我就不再重复了，我来讲一讲我搭建本地环境的步骤，和遇到的问题吧。

## 搭建本地博客环境

我想要的是，像平时写代码一样写博客，随手写，随手发布，修改发布都很方便。这就需要在本地建立 [jekyll][] 开发环境。

[jekyll][] 需要 Ruby 开发环境：

### 1.安装 RubyInstaller for Windows
如果你跟我一样都使用Windows操作系统，那就先去 [RubyInstaller][]下载安装。注意：安装1.9版本是比较保险的作法；

### 2.安装 Development Kit
再下载安装 Development Kit ，链接就在下面。注意：右边有 Ruby 版本和 Development Kit 的对应关系，不要安装错了；

    $ ruby dk.rb init
    $ ruby dk.rb install

（我是使用 Git Bash 执行命令的，所以你会看到上面命令前有 $ ）

### 3.安装 RubyGems
再下载 [RubyGems][] ，我下载的是1.8.25。修改源为 taobao ，参考 [RubyGems 淘宝网镜像][5];

### 4.安装 jekyll
现在可以安装 [jekyll][] 了。

    $ gem install jekyll

### 5.安装 Python
什么？还要安装 Python ？是的，如果你想要代码高亮的话， Python 是必须安装的。建议你安装在 Windows 下比较好使的 [ActivePython][] 2.x，3.x版本可能与 jekyll 有兼容性问题。

### 6.创建你的博客吧
使用 [jekyll][] 命令创建博客。

    $ jekyll new my-awesome-site
    $ cd my-awesome-site
    $ jekyll serve

如果你存在编码问题，尝试执行这个命令：

    $ export LANG=zh_CN.UTF-8

另外，[jekyll][] 使用的是 Liquid ， Shopify 的模板语言，建议使用之前先看看语法。

参考文档： [Running Jekyll on Windows][6]

## 绑定自己的域名

在[使用Github Pages建独立博客][3]这篇文章里面，已经讲了怎样绑定自己的域名。我就说说购买域名的经历吧。

我的域名是在 [Godaddy][] 通过支付宝支付购买的。购买之前先上网搜搜优惠码，可以便宜不少。

问题是，我在付款之后一直没有把域名给我，虽说申请域名需要一段时间，也不能这么久吧？然后就写邮件发给客服询问，注意：一定要把你在注册时候设置的四位数字 PIN 发给他们。
由于时差，要在十几个小时以后才能收到回复。好在，最终问题解决了。

好了，终于拥有自己域名的自由博客了，飞击键盘，开始写吧！

## 感谢

最后，我要感谢一下 [BeiYuu][] ，是他的开源才能让我这个不太懂 CSS 的土鳖这么快就拥一个时髦的博客。当然，我也小改了一下。

[B3log]:        http://b3log.org/                                       "B3log"
[DL88250]:      http://88250.b3log.org/                                 "DL88250"
[GitHub]:       https://github.com/                                     "GitHub"
[ProGit]:       https://github.com/progit/progit/tree/master/zh         "ProGit"
[GitMagic]:     https://github.com/blynn/gitmagic/tree/master/zh_cn     "GitMagic"
[jekyll]:       http://jekyllrb.com/                                    "jekyll"
[RubyInstaller]: http://rubyinstaller.org/                              "RubyInstaller"
[RubyGems]:     http://rubyforge.org/frs/?group_id=126                  "RubyGems"
[ActivePython]: http://www.activestate.com/activepython                 "ActivePython"
[Godaddy]:      http://www.godaddy.com/                                 "Godaddy"
[BeiYuu]:       http://beiyuu.com                                       "BeiYuu"
[1]:            {{ page.url}}                                           ({{ page.title }})
[2]:            http://www.yangzhiping.com/tech/github.html             "如何高效利用GitHub"
[3]:            http://beiyuu.com/github-pages/                         "使用Github Pages建独立博客"
[4]:            http://blog.leezhong.com/tech/2010/08/25/make-github-as-blog-engine.html "使用github作为博客引擎"
[5]:            http://ruby.taobao.org/                                 "RubyGems 淘宝网镜像"
[6]:            http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html "Running Jekyll on Windows"