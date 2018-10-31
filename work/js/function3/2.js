// function add(obj) {
//   return obj.a+ obj.b;
// }
// console.log(add({a:2,b:3}));

var obj = {
  a:2,
  b:3,
  add : function(){
    console.log(this === obj);
    return this.a + this.b;
  }
};

console.log(obj.add()); // true, 5
// obj has add() 이때 Function Context는 obj이다.

var adder = obj.add; //adder는 add 매서드를 가리킨다.
console.log(adder()); // false, NaN

console.log(adder.call(obj)); // true, 5
// call(parameter) this === parameter
