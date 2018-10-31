/*
  동기 방식의 코딩
  시간이 오래 걸리는 로직을 동기 방식으로 작성하면
  사용자는 마치 프로그램이 멈춘것처럼 느끼게 되므로
  이런 경우 비 동기 방식의 코딩으로 변경해야 한다.
 */


console.log('start');

// Block Operation: 코드가 멈춰보일 정도로 시간이 
// 많이 소비되는 로직처리 

function visitCafe(){
  var oldTIme = Date.now();
  while (Date.now() < oldTIme + 2000) { // 2초지연
    
  }
  return true;
}

// 반 자리가 있는지 물어본다.
// 있다면 식사를 한다.
var empty = visitCafe();
// 2초 후에나 결과를 받음 = 
// 2초 동안 아래 코드를 수행할 수 없다.

if(empty){
  console.log('enter the cafe and have a meal');
}
console.log('go to the bookstore and buy a book');
