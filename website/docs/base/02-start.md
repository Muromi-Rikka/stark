# 项目启动

> 本项目是基于模块联邦的微前端项目，整体项目启动可能较为复杂，这里详细讲解一下本项目的启动原理

## 纯本地启动

### 启动方式

本项目纯本地启动只需在项目根目录，运行`pnpm serve:dev:all`即可。

该条命令会同步启动`project`下所有的项目

### 配置

纯本地启动时需将`project`中的`sneaky`的`remote.ts`配置文件的变量`dev`,改成`true`即可。否则默认将走线上的远程模块。

## 使用远程模块

> 指的是只有访问的容器项目与需要开发的模块项目本地启动，不在开发计划的模块，会默认使用线上部署好的远程模块。

### 启动方式

需要单独进入需启动的`project`中，运行`pnpm serve:dev`进行启动。

### 配置

需要将`project`中的`sneaky`的`remote.ts`配置文件的变量`dev`,改成`false`。将需要使用本地模块的`project`，在`onlineList`的列表中排除。
