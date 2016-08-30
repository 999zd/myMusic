/**
 *帮我匹配路径，分发到具体的业务逻辑函数
 *
 */
var fs = require('fs')
var path = require('path')
var mime = require('mime')

var indexController = require('./controllers/index')
var musicController = require('./controllers/music')



module.exports = function(req, res){
    var method = req.method.toLowerCase()
    var url = decodeURI(req.url)
    //路径判断
    if(method === 'get' && url ==='/'){
        indexController.showIndex(req,res)
    }else if(method ==='get' && url ==='/index'){
        indexController.showIndex(req,res)
    }else if(method === 'get' && (url.startsWith('/node_modules/'))|| (url.startsWith('/uploads/'))){
        var staticPath = path.join(__dirname,url)
        fs.readFile(staticPath, function(err,data){
            if(err){
                return res.end(err.message)
            }
            var contentType = mime.lookup(url)
            res.writeHead(200, {
                'content-Type':contentType,
            })
            res.end(data)
        })
    }else if(method ==='get' && url =='/favicon.ico'){
        res.end()
    }else if(method ==='get' && url ==='/add'){
       musicController.showAdd(req,res)
    }else if(method === 'get'&& url ==='/edit'){
        musicController.showEdit(req,res)
    }else if(method ==='get' && url ==='/remove'){
        res.end("remove page")
    }else if(method ==='get' && url ==='/login'){
        res.render('login',{
            'title':'登录',
        })
    }else if(method === 'psot' && url ==='/add'){
        musicController.doAdd(req,res)
    }
}