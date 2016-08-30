var Music = require('../models/music')

exports.showIndex = function (req,res) {
    res.render('index', {
        tiele: '首页',
        musicList: Music.getAll()
    })
}