var a =10;
var a =10; // 재선언이 된다.
console.log(a);

let b = 10;
// let b = 10; Identifier 'b' has already been declared
console.log(b);


//scope: 범위 연산자를 기준으로 해당 자원을 어느 위치에서 접근하여 사용할 수 있는 가를 판단하는 기준

var x = 100;

if (true) {
  console.log(x);
  var y = 200;
  let yy =200;
}  //범위 연산자
//안쪽 영역에서 바깥쪽 영역의 자원을 사용할 수 있다.
//모든 language 공통

console.log(y);
// 자바는 안된다. 바깥 쪽 영역에서 안쪽 영역의 자원을 사용할 수 없다.
// console.log(yy); ReferenceError: yy is not defined
// let을 만든 이유: scope를 다른 language 기준으로 똑같이 맞춰주는 게 필요하여 도입하였다.
// 컴파일러(브라우저)가 let을 지원하는지 확인해야 한다.

// let 과 var 자료형의 차이점
