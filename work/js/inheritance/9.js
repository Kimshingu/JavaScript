function Vehicle(){
  this.run = function () {
    console.log('Vehecle is running');
  };
}

//var vehicle = new Vehicle();
Vehicle.prototype.move = function () {
  console.log('Vehecle is moving');
};

function Car(){
  this.doors = 4;
}

 Car.prototype.__proto__ = Vehicle.prototype;
//Car.prototype.__proto__ = new Vehicle();
// console.log(Car.prototype); // {__proto__: Vehicle.prototype}
console.log(Car.prototype); //{run:function, __proto__: Vehicle.prototype}

var car = new Car();
console.log(car); // {doors:4, __proto__:Car.prototype}
console.log(car.doors);
car.move();
//car.run();
/*
  move 자원을 사용하기 위해 처리된 과정
  1. car가 가리키는 객체에 해당 자원이 있는지 찾아본다.
  2. car.__proto__가 가리키는
  부모객체 Car.prototyp에 해당 자원이 있는지 찾아본다.
  3. Car.prototype.__proto__가 가리키는
  부모객체 Vehicle.prototype 객체에 해당 자원이 있는지 찾아본다.

  만약, 여기서도 찾지 못했다면
  Vehicle.prototype.__proto__ === Object.prototype 이므로
  한 단계 위로 올라가서 Object.prototype이 가리키는 객체에서
  해당 자원이 있는지 찾아본다.
  Object.prototype.__proto__ === null을 만날떄까지 수행된다.
  null을 만났다는 것은 더 이상 위로 부모가 없다는 뜻
 */
