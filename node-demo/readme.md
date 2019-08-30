8月30日

- Node.js 介绍<http://nodejs.cn/> 

  - Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。  

    - 不是库、不是框架、不是语言
    - 可以解析和执行JavaScript代码，使JavaScript代码脱离浏览器执行。
    -  Chrome V8 引擎是目前公认的解析执行JavaScript代码最快的

  - Node.js 中的JavaScript 

    - 没有dom （DOM 将 HTML 文档表达为树结构）

      ![HTML DOM Node Tree](https://www.w3school.com.cn/i/ct_htmltree.gif) 

    - Node.js 这个JavaScript 运行环境提供了服务器级别的操作API

      - 文件读写、网络服务构建、网络通信、数据库读写等

  - Node.js 的特性

    - 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。  

  

- Hello World

  - Node.js的安装
    - Node.js 安装配置<https://www.runoob.com/nodejs/nodejs-install-setup.html> 
    - node --version 检查安装情况
  - 执行nodejs文件
    - 使用node命令 + js文件名
    - nodemon 
      - 需要独立安装，解决频繁修改代码重启服务器的问题，
      - 通过nodemon 替换node启动项目，可以监视文件的变化，在文件变化时，自动重启项目，
  - 常用API
    - node为提供的API都被包装到了一个核心模块中，例如[fs](http://nodejs.cn/api/fs.html)、[http](http://nodejs.cn/api/http.html)、url、os等，通过require引用
      - FS——文件读写——日志
        - fs.readFile()  缓冲读取整个文件，不涉及流
      - http——网络服务构建——API服务器
        - http. createServer()  创建server实例，自动添加到'request'事件的函数
          - 'request' 事件，每次有请求时都会触发 
          - res.writeHead() 向请求发送响应头 
          - response.end() 发送所有响应头和主体 
        - server.listen()     启动 HTTP 服务器监听连接 
      - url——请求路径的处理
        - url.parse()方法，解析URL地址，可以拿到请求路径pathname和请求的参数query （废弃）

  

- npm常用操作

  - npm是使用nodejs开发的
  - npm init 
    - 根据向导，可以生成package.json 
  - npm --version
    - 查看npm版本
  - npm install （npm i） -g 是全局安装
    - 安装npm依赖
  - npm uninstall (npm un)  -g是全局安装
  - npm list --depth=0 -global 查看全局依赖

  

- package.json 

  - 包描述文件，每个项目都有，类似maven中的pom.xml，最重要的是dependencies标签内容，存放了第三方包的依赖信息。

  

  

  

- node作用域及模块化

  - node中没有全局作用域，只有模块作用域/文件作用域，引入模块使用require()函数，但是引入其他js文件是为了调用其他文件的方法或者变量。
  - 引入模块时，相对路径"./"不能省，但后缀js可以省
  - 为了实现模块间的通信，需要使用exports对象，将需要被外部访问的函数的对象存入exports。 

  

- 模板引擎

  - art-template 
    - 不仅可以在前端使用，还可以在后台使用
  - 客户端渲染：
    - 浏览器的第一次请求是请求页面的html代码，这次请求是由服务器端读取html文件，返回过来的，不涉及数据渲染；如果页面的html中有ajax，浏览器会执行第二次请求，ajax拿到服务器端的数据，然后由客户端进行页面的渲染。 
  - 服务端渲染
    - 浏览器只进行一次请求，服务端会读取模板文件，同时查询数据，然后由服务器使用模板引擎渲染出来最终的页面返回给浏览器。 
  - 两者区别
    - 理论上服务端渲染的速度快，但是服务端的压力负荷也会增大。
    - 而浏览器端渲染对于用户体验更好，因为客户会先看到一个空页面。而且ajax让客户端渲染拥有了局部刷新的特性。 
    - 客户端渲染不利益SEO优化，客户端异步渲染很难被爬虫抓取
  - 如何区分页面上的数据是客户端渲染ajax还是服务端渲染
    - 右键查看网页源代码能找到的内容都是从服务器中获取的，
    - 只能通过审查元素找到的数据是客户端渲染的。 

  

8月31日

- Express框架

  - 安装
    - npm i express
  - hello world
  - 路由
    - 请求方法
    - 请求路径
    - 请求处理方法/函数
  - 静态服务
  - 在express中使用art-template模板引擎 



- 数据库
  - 关系型和非关系型数据库
    - 关系型
      - 表结构
      - sql
      - 约束：主键、外键、非空、默认值、唯一
    - 非关系型
      - key-value
      - 表结构灵活，可以存储任意数据
  - mongodb
    - 安装
    - 启动 mongod
    - 关闭 ctrl + c
    - 连接 mongo
    - 退出 exit
    - 查看所有数据库信息 show dbs
    - 查看当前操作的数据库 db
    - 切换数据库 use db_name
    - mongoose
      - 安装
        - npm i mongoose
        - CRUD



​	

- 静态资源的请求 

  - 打开一个网页，浏览器会触发多个请求，除了请求html页面和数据接口，还会对引入的js代码、样式、图片、视频等静态资源进行请求。 

  - 注意“/”

    - 注意页面中的 "/" 与服务端代码中的 "/" 的区别，前者表示url地址，后者表示磁盘根目录。

       

- 重定向

  - 包含两步（JS等语言）：
    - 设置状态码为302（临时重定向）
    - 设置Header中的Location为重定向后的链接

  - 重定向有两种
    - 301永久重定向浏览器会记录重定向前后的信息，下次再请求原URL时会从本地缓存拿到重定向信息，也就是直接访问新的URL地址。 
    - 302临时重定向