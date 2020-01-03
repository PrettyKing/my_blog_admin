# 中台搭建 2-egg.js 目录结构和约定规范

1. egg.js 目录结构介绍

   > 只介绍比较重要的文件，去看文档（文档全部中文，很好理解）。

- app 文件夹:项目开发文件，程序员主要操作的文件，项目的大部分代码都会写在这里。
- config 文件夹：这个是整个项目的配置目录，项目和服务端的配置都在这里边进行设置。
- logs 文件夹：日志文件夹，正常情况下不用修改和查看里边内容。
- node_modules:项目所需要的模块文件，这个前端应该都非常了解，不多作介绍。
- run 文件夹：运行项目时，生成的配置文件，基本不修改里边的文件。
- test 文件夹：测试使用的配合文件，这个在测试时会使用。
- .autod.conf.js: egg.js 自己生成的配置文件，不需要进行修改。
- eslinttrc 和 eslintignore：代码格式化的配置文件。
- gitgnore：git 设置忽略管理的配置文件。
- package.json： 包管理和命令配置文件，这个文件经常进行配置。

> 这些就是 egg.js 项目比较重要的一些文件作用，这里只是简单的介绍了一下，在以后课程中如果开发用到，我们会详细讲解。比较重要的是 app 文件夹、config 文件夹和 package.json 文件。

2. Egg.js 目录约定规范

> Koa2 框架虽然小巧好用，但是在团队开发中使用，是缺少规范的，所以不擅长企业级开发。Egg.js 框架就是在 Koa2 的基础上规范了这些约定，所以也带来了一些文件目录的限制。

在 app 目录下，egg 要求我们必须要有下面的文件

- controller 文件夹：控制器，渲染和简单的业务逻辑都会写道这个文件里。配置路由时也会用到（路由配置需要的文件都要写在控制器里）。
- public 文件夹：公用文件夹，把一些公用资源都放在这个文件夹下。
- router.js: 项目的路由配置文件，当用户访问服务的时候，在没有中间件的情况下，会先访问 router.js 文件。
- service 文件夹：这个是当我们的业务逻辑比较复杂或和数据库打交道时，会把业务逻辑放到这个文件中。
- view 文件夹：模板文件夹，相当于表现层的专属文件夹，这个项目，我们使用接口的形式，所以不需要建立 view 文件夹。
- extend 文件：当我们需要写一些模板中使用的扩展方法时，我们会放到这个文件夹里。
- middleware：中间件文件夹，用来写中间件的，比如最常用的路由首位。

#### 当然我们现在有个最基础的，然后又需要再不断向文件夹里加文件就可以。

# 中台搭建 3-RESTful API 设计简介和路由配置

> 我们的所有数据的获得和业务逻辑的操作都是通过中台实现的，也就是说中台只提供接口，这里的设计我们采用`RESTful`的规则，让 egg 为前端提供 Api 接口，实现中台主要的功能。

### RESTful 简介和约束方式

RESTful 是目前最流行的网络应用程序设计风格和开发方式，大量使用在移动端 App 上和前后端分离的接口设计。这种形式更直观并且接口也有了一定的约束性。

约束的请求方式和对应的操作。

- **GET(SELECT)** ： 从服务端取出资源，可以同时取出一项或者多项。
- **POST(CREATE)** ：在服务器新建一个资源。
- **PUT(UPDATE)** ：在服务器更新资源（客户端提供改变后的完整资源）。
- **DELETE(DELETE)** ：从服务器删除资源。

3. 中台搭建 4-Egg.js 中连接 mysql 数据库

> egg-mysql 模块   //npm i egg-mysql --save or yarn add egg-mysql

```javascript
//	/server/config/plugin.js

'use strict';

//配置插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}


// /config/config.default.js
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '12345678',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

```



