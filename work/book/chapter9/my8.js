// 클래스는 호이스팅이 안된다.
// 클래서는 재정의도 허용하지 않는다.
class Car {
  constructor(color){
    this.color = color ||'Red';
  }
}
//sedan is Car.
class Sedan extends Car{
  
}

let car1 = new Car('Blue'); 
console.log(car1); 
let car2 = new Car('White'); 
console.log(car2); 
let car3 = new Car(); 
console.log(car3); 
