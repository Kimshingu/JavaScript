// 클래스는 호이스팅이 안된다.
// 클래서는 재정의도 허용하지 않는다.
class Car {
  constructor(color){
    this.color = color ||'Red';
  }
}

//sedan is Car.
class Sedan extends Car{
  // constructor 함수를 생략하면 넣어준다.
  // 심지어, 부모 함수에게 파라미터도 전달한다.
  constructor(kolor){
    // ReferenceError: Must call super constructor in derived class 
    // before accessing 'this' or returning from derived constructor
    super(kolor);
    // 새 객체의 this를 부모에게 전달한다.
  }
}

var sedan = new Sedan('Blue'); //Sedan { color: 'Blue' }
