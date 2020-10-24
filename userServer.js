const express = require('express')
const app = express()

app.get('/users/info', function (req, res) {
  //1、解析参数
  //2、根据参数从数据库去查找响应的数据
  //3、把查找到的数据全部序列化为json
  //4、返回到前端

  let response = {
    status:200,
    data:[
      {id:1,name:'赵丽颖'},
      {id:2,name:'杨幂'}
    ]
  }

  res.send(response)
})

app.listen(4000,() => {
  console.log('服务已经启动 在4000端口')
})