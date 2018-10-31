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

/*
  함수를 선언하면 객체 2개가 만들어진다.
  1. 함수객체 Foo
  2. Foo.prototype 히든 프로퍼티가 가리키는 객체

  기능적으로보면 함수 === 객체 + 로직

 */
function Foo() {}
// var Foo = 100;
Foo.x= 100; //개발자가 직접 동적으로 x 프로퍼티를 추가한다.
console.log(Foo.prototype);
console.log(Foo.prototype.construct === Foo()); //true


var obj = {
  a: 10, //객체의 프로퍼티의 값을 참조할땐 : 을 쓴다.
  // 객체의 자료형은 var임으로 표기하지 않는다.
  print: function() { //객체의 멤버인 함수는 메소드라고 부른다.
    console.log('a =' + this.a);
  }
}

console.log(obj.a);
obj.print();
