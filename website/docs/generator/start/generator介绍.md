---
id: generator
title: 介绍
---

`@jdfed/form-generator`是drip-form的快速生成界面。

## 功能介绍

* 快速搭建表单
* 生成表单JSON数据
* 导入JSON数据，预览表单
* 配置校验
* 自定义业务组件

## 区域介绍

generator生成器分四个区域：

* header

  header区可以导入json、编辑json、预览表单、导出json

* 组件区

  组件区包含generator支持拖拽的表单控件。

  * 表单组件

    常见表单控件

  * 辅助组件

    非常见表单控件，用于展示文字等

  * 容器组件

    根据数据类型选择对应容器

    * 数组容器

      支持自增、元祖

    * 对象容器

      支持折叠、分类展示表单

  * 业务组件

    业务自定义组件，可根据业务自定义

* 可视区

  实时查看组件区拖拽

* 编辑区

  编辑区可以编辑表单样式、表单校验

  * 属性配置

    分为全局配置和表单配置

    点击可视区空白区域为全局配置；点击选中可视区表单为表单配置

  * 校验配置

    根据当前表单数据类型，配置数据校验

![区域介绍](https://img12.360buyimg.com/imagetools/jfs/t1/141441/38/25321/381697/61ad7e08Eb9df5f95/ed48fe25a2e01779.jpg)
