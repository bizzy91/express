// Express 웹 서버 띄우기

// Express 모듈 가져오기
const express = require('express');
// Nunjucks(View Engine) 가져오기
const nunjucks = require('nunjucks');
// routes/admin.js 가져오기
const admin = require('./routes/admin');

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('express start!');
});

nunjucks.configure('template', {
    autoescape: true,  // true -> HTML 태그 출력, false -> 태그 적용 후 출력
    express: app  // express: [express를 가져와 할당한 객체의 이름]
});

// Routing
app.use('/admin', admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});