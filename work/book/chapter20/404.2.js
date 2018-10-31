// Hoisting
var add;
var add;
console.log(add()); // TypeError: add is not a function

// 함수표현식
add = function () {
  return 10;
};

console.log(add()); // 10

add = function () {
  return 20;
};

console.log(add()); // 20

// A개발자는 10을 리턴한다고 주장하고
// B개발자는 20을 리턴한다고 주장한다.
// C개발자는 A개발자가 만든 함수를 사용 하고싶어 한다.
// 어떻게 가능할 것인가?

// 노드의 모듈은 자바의 패키지 기능에 가깝다./
