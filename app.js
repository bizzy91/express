// Express 웹 서버 띄우기
const express = require('express');
// routes/admin.js 가져오기
const admin = require('./routes/admin');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('express start!');
});

// Routing
app.use('/admin', admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});