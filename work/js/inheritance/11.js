function Vehicle(){
  this.color = "Red";
  this.print = function() {
    console.log("Vehicle # print() called");
  } //생성자 안에 있는건 상속 자원이 아니다.
   //생성자 함수가 가지고 있는 prototype객체의 자원이 상속 자원이다.
}
Vehicle.prototype.color = "Red";
Vehicle.prototype.print = function() {
  console.log("Vehicle.prototype # print() called");
}

function Car(){}
Car.prototype.__proto__ = Vehicle.prototype;

var car = new Car();
console.log(car);
console.log(car.color); //undefined
car.print();
