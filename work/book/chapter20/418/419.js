// 기동 파일에서 환경변수 정보를 작동시킨다.
// require('./config');

const debug = process.env.DEBUG === "1" ?
  console.log :
  function() {};
debug("Visible only if environment variable DEBUG is set!");

console.log(process.env);

/*
>set DEBUG = 0
node 419.js

>set DEBUG = 1
node 419.js
*/
