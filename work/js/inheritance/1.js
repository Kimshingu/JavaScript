// function Function(){}
// function Object(){}

//Prototype은 상속할때 사용하는 객체다

/*
  함수는 선언만 하면 컴파일러가 처리하여 객체가 된다.
  함수를 메모리에 등록하는 과정을 개발자가 별도로 수행할 필요가 없다.
  함수는 선언 즉시 객체로 생각하면 된다.

  함수는 객체이므로 자신만의 프로퍼티를 가질 수 있다.
  함수는 자동으로 히든 프로퍼티 Prototype을 가지며 이 속성으로
  상속용 객체를 자동으로 갖게 된다.
 */
function Foo() {}
// var Foo = 100;

Foo.x=100; //개발자가 직업 동적으로 x 프로퍼티를 추가한다.
console.log(Foo.x);
console.log(Foo.prototype);
