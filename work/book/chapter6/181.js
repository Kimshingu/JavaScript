// // => : 뚱뚱한 화살표 연산자 (자바는 ->를 사용)
// const f1 = function() {
//   return "hello!";
// }

const f1 = () => "hello!";
// body에서 {}범위 연산자를 생략하면 return이 된다.

// const f2 = function(name) {
//   return `Hello, ${name}!`;
// }

const f2 = name => `Hello, ${name}!`;


// const f3 = function(a, b) {
//   var sum = a+b;
//   return sum;
// }

const f3 = (a, b) => {
  var sum = a+b;
  return sum;
};
