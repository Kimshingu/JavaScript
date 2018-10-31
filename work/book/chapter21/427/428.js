/*
  property descriptors의 2가지 종류
  1. 데이터 기술(data descriptors): 데이터 프로퍼티 (값을 보관)
  2. 데이터 접근기술(accessor descriptors): 접근제어 프로퍼티
*/

let obj = {a:10}; // 데이터 프로퍼티

Object.defineProperty(obj,'b', { // 접근제어 프로퍼티
  get: function () {
   // 여기에 값을 가동하는 비즈니스 로직을 배치
    return this.a * 10;
  },
  set: function (a) {
    this.a = a / 10;
  },
  enumerable: true,
  configurable: true
});

console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'b'));

console.log(obj.a);
console.log(obj.b); // 100

obj.b = 200;
console.log(obj); 

class Square {
  constructor(length = 10){
    this.length = length;
}
  show() {
    console.log('this.length =' + this.length);
  }
  get area(){
    //length * length; //함수 스코프안에 length란 지역변수가 있을 때
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area);
  }
}
let s = new Square();
console.log(s);
console.log(s.area); // 바로 사용하는 경우 get, () 괄호 사용하지 않는다.
s.area = 400; // 할당 연산자로 저장하는 경우 set, () 괄호 사용하지 않는다.
console.log(s.area);
console.log(Object.getOwnPropertyDescriptor(Square.prototype,'area'));
