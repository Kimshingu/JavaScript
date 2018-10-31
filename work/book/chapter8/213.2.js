/*
 자바스크립트에는  class 개념이 없다.
  함수만 존재한다.
 */

function car() {return 100;}
var ret = car();
console.log(ret);

// function Car() {this.color = 'Red';}
class Car {
  constructor(){
    this.color = 'Red';
  }
}
var c = new Car();
console.log(c);

/*
ESMA6 에서부터는 class라고 하는 문법을 사용할 수 있다.
class 문법은 생성자 함수 작성 문법이다.
 */
