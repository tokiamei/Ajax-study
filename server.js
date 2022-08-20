// 1.引入 express
const express = require("express");

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request 是对请求报文的封装，response 是对响应报文的封装
app.get("/server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  // 设置响应体
  response.send("HELLO AJAX -3");
});

app.all("/server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头
  response.setHeader("Access-Control-Allow-Headers", "*");

  // 设置响应体
  response.send("HELLO AJAX POST");
});

app.all("/json-server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 响应头
  response.setHeader("Access-Control-Allow-Headers", "*");

  // 响应一个数据
  const data = {
    name: "瀚宇星皇",
  };

  let str = JSON.stringify(data);

  // 设置响应体
  response.send(str);
});

// 针对 IE 缓存
app.get("/ie", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");

  // 设置响应体
  response.send("<h1>HELLO IE</h1>");
});

// 延时响应
app.all("/delay", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  // 加一个定时器，3s 后将结果返回给客户端
  setTimeout(() => {
    response.send("延时响应");
  }, 3000);
});

// jQuery 服务
// app.get('/jquery-server', (request, response)=>{
//     // 设置响应头，设置允许跨域
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.send('Hello jQuery AJAX');
// })

app.all("/jquery-server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send('Hello jQuery AJAX');
  const data = { name: "混元天尊" };
  response.send(JSON.stringify(data));
});

app.post("/axios-server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send('Hello jQuery AJAX');
  const data = { name: "混元天尊" };
  response.send(JSON.stringify(data));
});

app.all("/fetch-server", (request, response) => {
  // 设置响应头，设置允许跨域
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  // response.send('Hello jQuery AJAX');
  const data = { name: "混元天尊" };
  response.send(JSON.stringify(data));
});

// JSONP 服务
app.all("/jsonp-server", (request, response) => {
  // response.send("console.log('HI TOKIAME')");
  const data = {
    exsit: 1,
    msg: "用户名已经存在",
  };
  // 将数据转化为字符串
  let str = JSON.stringify(data);
  // 返回结果
  response.end(`handle(${str})`);
});

// 4.监听端口启动服务
app.listen(8000, () => {
  console.log("服务器已经启动， 8000 端口监听中 ...");
});
