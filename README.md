#我的音乐
## 项目初始化
    -新建一个mymusic目录
    -使用'npm init'创建一个package.json的文件

## 路由设计
当用户访问什么路径的时候做什么操作

GET  /  渲染首页
GET  /add  渲染添加音乐页面
POST /add  出理添加音乐请求
GET  /edit 渲染编辑音乐页面
POST /edit 出来编辑音乐页面
GET  /remove 出来删除音乐请求

后台拿到当前的请求方法和当前的请求路径