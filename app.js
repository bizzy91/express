// Express 웹 서버 띄우기

// Express 모듈 가져오기
const express = require('express');
// Nunjucks(View Engine) 모듈 가져오기
const nunjucks = require('nunjucks');
// Morgan 모듈 가져오기
const logger = require('morgan');
// routes/admin.js 가져오기
const admin = require('./routes/admin');

const app = express();
const port = 3000;

// 미들웨어 셋팅
app.use(logger('dev'));

app.get('/', (req,res) => {
    res.send('express start!');
});

// 미들웨어 순서 보기
function vipMiddleWare(req, res, next){
    console.log('최우선 미들웨어');
    next();
}

nunjucks.configure('template', {
    autoescape: true,  // true -> HTML 태그 출력, false -> 태그 적용 후 출력
    express: app  // express: [express를 가져와 할당한 객체의 이름]
});

// Routing
app.use('/admin', vipMiddleWare, admin);

app.listen(port, () => {
    console.log('Express listening on port', port);
});