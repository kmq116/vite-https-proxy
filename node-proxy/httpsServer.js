const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
app.use(express.static('public'));

const options = {
    key: fs.readFileSync('./127.0.0.2+1-key.pem'),
    cert: fs.readFileSync('./127.0.0.2+1.pem')
};

// 创建 HTTPS 服务器
const server = https.createServer(options, app);

// 在指定端口上启动服务器
server.listen(443, () => {
    console.log('HTTPS 服务器已启动');
});
