global.a = 'global.a';

function foo(){

  console.log(this === global, this.a);
}

foo.a = 'foo.a';

// #1
foo();

// #2
foo.call(foo);

// #3
var obj = {
  a: 'obj.a',
  foo: function(){
    console.log(this === global, this.a);
  } //false 'obj.a'
};

obj.foo();

// #4
function Car() {
  this.color = 'Red';
}

var car = new Car();
console.log(car);

// new 이때 this는 새로만는 객체이다
