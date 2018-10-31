console.log('START');

// var fn = function () {
//   console.log(i);
// };

for (let i = 1; i <= 3; i++) {  
  setTimeout( function()  {
    console.log(i);
  }, 1000); // 자바의 쓰레드슬립
}
console.log('END');

// START
// END
// 1
// 2
// 3

// setTimeout Queue에 저장
// i 와 setTimeout 함께 클로저 스코프

// var는 {} 영향을 받지 않는다. i 값을 참조할 수 있다.
