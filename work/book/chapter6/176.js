// var b = 20;
// var obj = {
//   a:10,
//   b, //b: b
//   speak(){
//     console.log('SPEAK!');
//   }   // speak 프로퍼티 key로 익명함수를 가리키고 있다.
// };
// 
// console.log(obj);
// obj.speak();



const o = {
  name: 'Wallace',
  speak() {
    return `My name is ${this.name}!`;
  },
}

console.log(o.speak()); // "My name is Wallace!

const speak = o.speak;
console.log(speak === o.speak); // true; both variables refer to the same function
console.log(speak()); // "My name is !"
// . 앞에 명시가 안되어 있으면 여기서 this === global
