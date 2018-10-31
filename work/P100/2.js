// if(n1) 관습적으로 처리하는 방식을 컴파일러가
// 받아들여서 다음처럼 처리한다.
// number >> 0: false
// string >> ""; false
// null, undefined >> false
// object >> true

var n1 = "";

if (n1) {
  console.log('True');
} else {
  console.log('False');
}
