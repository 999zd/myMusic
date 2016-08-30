var fs = require('fs')
var path = require('path')
var template = require('art-template')
var config = require('../config')

module.exports = function(res){
        //把静态模版文件都放到wiews目录中
     res.render = function(templateName,dataObj){
         //这里将‘index.html’中的内容，整体当作模版字符串
        fs.readFile(path.join(config.templatePath,templateName+config.templateExtName),'utf8',function(err,data){
          if(err){
              return res.end(err.message)
          }
          var rander = template.compile(data)
          var htmlstr = rander(dataObj)
          res.writeHead(200,{
              'content-Type':'text/html; charset=utf-8'
          })
          //在发送到客户端之前，就已经在后台将数据和模版字符串绑定在了一起
          res.end(htmlstr)
        })
    }
}