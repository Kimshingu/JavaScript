class Car {
  constructor(color){
    this.color = color ||'Red';
  }
  print(){
    console.log('this.color = ' + this.color);
  }
}

//sedan is Car.
class Sedan extends Car{

  constructor(kolor, doors = 4){
    super(kolor);
    this.doors = doors;
  }
  // @override
  print(){
    super.print();
    console.log('this.doors = ' + this.doors);
  }
}

var sedan = new Sedan('Blue');
console.log(sedan);
sedan.print();
