var Music = require('../models/music')

//音乐相关的处理函数 
exports.showAdd = function(req,res){
    res.render('add',{
        'title':'添加音乐',
    })
}
//exports.doAdd = function(req,res){
//    //request 就是一个可读流
//    var data = ''
//    req.on(data,function(chunk){
//        data+=chunk
//    })
//    req.on(end, function(){
//        res.end(data)
//    })
//}
exports.showEdit =function(req,res){
    res.render('edit',{
        'title':'编辑音乐',
    })
}