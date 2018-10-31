// getter, setter 함수 
// 다른 프로퍼티로 계산해서 해당 프로퍼티 값을 가질 수 있을때

class Square {
  constructor(length = 10){
    this.length = length;
    // this.area = length * length ;
  }
  show() {
    console.log('this.length =' + this.length);
  }
  get area(){
    //length * length; // 함수 스코프안에 length란 변수가 있을때
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area);
  }
}

let s = new Square();
console.log(s);
console.log(s.length);
console.log(s.area); // () 괄호  사용하지 않는다.
s.area =400; // () 괄호  사용하지 않는다.
console.log(s.length);
console.log(s.area);
