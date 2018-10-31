// function Car(){
// 
// }

// 생성자 함수임에도 메솓처럼 사용하는 것을 막지 못했던 부분을
// class 키워드로 생성자 함수를 만들면 막을 수 있다 
class Car {
  
}
console.log(Car()); //Class constructor Car cannot be invoked without 'new'

let car = new Car();
console.log(car);
