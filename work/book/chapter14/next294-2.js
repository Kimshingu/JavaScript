/*
  비동기 방식의 코딩
  1. call-back
  2. Promise
  3. Generator
*/


function asyncFuntionProvided(cb) {
  setTimeout(function(){
    var oldTime = Date.now();
    while (Date.now() < oldTime+2000) {
      // 손님이 꽉 차서 빈자리가 없다.
    }
    // 빈자리가 나면 손님이 준 연락 방법을 사용한다.
    cb('come on dude');
  }, 0);
}

console.log('start');

function visitCafe(cb){
  asyncFuntionProvided(cb);
}

// 연락방법을 정의한 로직
var fn = function(message){
  console.log('카페주인: '+ message);
  console.log('enter the cafe and have a meal');
};

visitCafe(fn);
console.log('go to the bookstore and buy a book');
