// 1. express 불러오기
const express = require('express'); // express 모듈을 불러와서 express 변수에 저장

// 2. express 실행
const app = express(); // express 함수를 호출해 만들어진 express application

// Prort Num, 포트번호
// 포트 번호는 컴퓨터에서 실행되고 있는 서버를 구분 짓기 위한 번호
// ex. http 80번, ssh 22번
// http://test.com -> 80번 포트 연결 (http://text.com:80)
// http://test.com:8000 -> 8000번 포트 연결
const PORT = 8000;

app.set('view engine', 'ejs'); // app에 view engine을 ejs 로 설정
app.use('/views', express.static(__dirname + '/views')); // ejs 파일을 저장할 views 폴더의 경로: 프로젝트 폴더
// console.log(__dirname); // 현재 폴더 위치 의미

app.use('/static', express.static(__dirname + '/static'));
// 만약, 어떤 사람이 ip:port/static/img/cat.jpg 로 접근하면 해당 파일을 ip:port/static/img/cat.jpg 에 존재하는지 찾는다.

// Routing
// 요청과 요청 경로를 설정
// / 경로 접속시 'hello express' 메세지 띄우기
// 클라이언트가 get 요청을 하면 -> 응답으로 hello expres 메세지를 띄운다.
// get 요청: 리소스 검색하고, 반환받기 위해 사용되는 메서드
app.get('/', function (req, res) {
  res.send('hello express'); // res.send(): 응답으로 메세지를 보냄
});

app.get('/test', function (req, res) {
  res.render('test'); // res.render(): 응답으로 views/ 폴더의 test.ejs 파일을 찾아 렌더링 (그려줌)
});

app.get('/test2', function (req, res) {
  res.render('test2');
});

// 3. 로컬 서버로만 동작
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});
