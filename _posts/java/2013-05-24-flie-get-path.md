---
layout:     post
title:      Path AbsolutePath CanonicalPath的不同
category: java
description: File的这几个取得path的方法各有不同 ...
---

## getPath()

    // 将此抽象路径名转换为一个路径名字符串
    public String getAbsolutePath()

得到的是构造file时候的路径。

## getAbsolutePath()

    // 返回抽象路径名的绝对路径名字符串
    public String getAbsolutePath()

得到全路径。

## getCanonicalPath()

    // 返回抽象路径名的规范路径名字符串
    public String getCanonicalPath()

不但是全路径，而且把.或者..这样的符号解析出来。

## 详细解释参考

<a href="http://www.blogjava.net/dreamstone/archive/2007/08/08/134968.html">file的getPath getAbsolutePath和getCanonicalPath的不同</a>

