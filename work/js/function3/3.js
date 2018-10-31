function Car(){
  a: 2,
  b: 3,
  add : function(){
    return this.a + this.b;
  }

}

var car = new Car();

console.log(car.call(Car));
