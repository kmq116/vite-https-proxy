const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from HTTP server!');
});

app.get('/api/test', (req, res) => {
    res.json({
        message: 'This is a test API response',
        timestamp: new Date().toISOString()
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
});
