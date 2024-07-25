const express = require('express');
const https = require('https');
const fs = require('fs');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 配置代理
const proxy = createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
});

// 使用代理中间件
app.use('/', proxy);

// SSL 证书配置
const options = {
    key: fs.readFileSync('./127.0.0.2+1-key.pem'),
    cert: fs.readFileSync('./127.0.0.2+1.pem')
};

// 创建 HTTPS 服务器
https.createServer(options, app).listen(443, () => {
    console.log('HTTPS server running on port https://127.0.0.1:443');
});
