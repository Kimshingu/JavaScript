let var1; // 묵시 undefined
let var2 = undefined; // 명시 undefined

// let, const 자원은 초기화 전에 사용이 불가하다.
x; // ReferenceError: x is not defined
let x = 3;  // we'll never get here -- the error stops execution

// var 변수는 선언만 호이스팅, 할당은 x

// 원래 코드
(function(){
  console.log(y);
  var y =10;
  var y =20;
  console.log(y);
  let z = 30;
  console.log(z);
})();

// 자바스크립트가 해석한 코드
(function(){
  var y;
  var y;
  let z;
  console.log(y);
  y =10;
  y =20;
  console.log(y);
  z = 30;
  console.log(z);
})();
