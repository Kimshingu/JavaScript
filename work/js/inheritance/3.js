function Foo(name) {
  this.name = name || 'anonyomous';  // 기본값 할당 로직
}

var f1 = new Foo();
console.log(f1);
var f2 = new Foo();
console.log(f2);

/*
  일반적으로 모든 객체는 히든 프로퍼티 __proto__를 갖는다.
  __proto__ 프로퍼티로 부모 객체를 참조한다.
 */


console.log(f1.__proto__ === Foo.prototype);
// __proto__이 가리키는 건 prototype 객체
console.log(f2.__proto__ === Foo());

var obj = {a:100};
console.log(obj.a);  // . means 'has'
console.log(obj.b);  // undefined
