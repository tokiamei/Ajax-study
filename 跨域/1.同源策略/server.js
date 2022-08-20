// 1.引入 express
const express = require('express');
// 2.创建应用对象
const app = express();
// 3.创建路由规则
app.get('/home', (request, response)=>{
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', '*');
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response)=>{
    // response.setHeader('Access-Control-Allow-Origin', '*');
    // response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('用户数据');
});

// 4.监听端口启动服务
app.listen(9000, ()=>{
    console.log("服务器已经启动，9000 端口监听中");
});