var musicList = [
  { id: 1, title: '富士山下', singer: '陈奕迅', music: '陈奕迅 - 富士山下.mp3', poster: '陈奕迅.jpg' },
  { id: 2, title: '石头记', singer: '达明一派', music: '达明一派 - 石头记.mp3', poster: '达明一派.jpg' },
  { id: 3, title: '青城山下白素贞', singer: '好妹妹乐队', music: '好妹妹乐队 - 青城山下白素贞.mp3', poster: '好妹妹乐队.jpg' },
  { id: 4, title: '友情岁月', singer: '黄耀明', music: '黄耀明 - 友情岁月.mp3', poster: '黄耀明.jpg' },
  { id: 5, title: '梦里水乡', singer: '江珊', music: '江珊 - 梦里水乡.mp3', poster: '江珊.jpg' },
  { id: 6, title: 'Blowing In The Wind', singer: '南方二重唱', music: '南方二重唱 - Blowing In The Wind.mp3', poster: '南方二重唱.jpg' },
  { id: 7, title: '女儿情', singer: '万晓利', music: '万晓利 - 女儿情.mp3', poster: '万晓利.jpg' },
  { id: 8, title: '王馨平', singer: '别问我是谁', music: '王馨平 - 别问我是谁.mp3', poster: '王馨平.jpg' },
  { id: 9, title: '五环之歌', singer: '岳云鹏', music: '岳云鹏,MC Hotdog - 五环之歌.mp3', poster: '岳云鹏.jpg' }
]

function Music(music){
    this.id = music.id
    this.title = music.title
    this.singer = music.singer
    this.music = music.music
    this.poster = music.poster
}
//获取
Music.getAll = function(){
    
    return musicList
}
//新增
Music.prototype.save = function(){
    var newId = 0;
    musicList.forEach(function(id,index){
        if(id>newId){
            newId = id
        }
    })
    musicList.push({
        id: newId+1,
        title:this.title,
        singer:this.singer,
        music: this.music,
        poster:this.poster
    })
}
//删除
Music.remover = function(id){
    //先判断该id是否存在
    var isExiset = false
    var music_index = -1
    musicList.forEach(function(music,index){
        if(music.id === id){
            isExiset = true
            music_index = index
        }
    })
    if(isExiset){
        musicList.splice(music_index,1)
    }
}

//修改
Music.update = function(id,title,singer,music,poster){
    //修改之前判断是否存在
    var isExiset = false
    var music_index = -1
    musicList.forEach(function(music,index){
        if(music.id === id){
            isExiset = true
            music_index = index
        }
    })
     if(isExiset){
         musicList[music_index].title = title
         musicList[music_index].singer = singer
         musicList[music_index].music = music
         musicList[music_index].poster = poster
     }          
}

module.exports = Music