var a = 10;
b =20; // Bad!

console.log(a);
console.log(b);

// Why 'b =20;' is Bad?
// 노드 컴파일러로 컴파일하면 전역객체 global 존재한다.
// 브라우저는 global이 없을 수 있다.
// console.log(global);
// global 객체에 변수 b를 집어넣었다? 과연 이런 용도의 객체에 변수 b를 집어넣을 이유가 있을까? 없음요

const PI = 3.141592;
// scope 룰은 Let과 동일
// PI = 3.15; TypeError: Assignment to constant variable.

// 자료형을 지정해주지 않는다면??
