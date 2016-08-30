var http = require('http')
var config = require('./config')
var router = require('./router')
var render = require('./common/render')

var server = http.createServer()

server.on('request',function(req,res){
    //给res对象加载一个render方法，方便在后面的代码中调用
    render(res)
    
    router(req,res)
})

server.listen(config.port,function(err){
    if(err){
        throw new Error("端口号被占用，请更换一个端口")
    }
    console.log('server is listening at port'+config.port)
    console.log('please visit http://'+config.host+':'+config.port)
})