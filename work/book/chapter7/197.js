// 즉시 호출하는 함수 표현식
// 변수, 함수를 외부와 격리하여 사용하고 싶을 떄
// IIFE 식을 사용한다.
(function() {
  'use strict';
  // 개발자가 스스로 컴파일러에게
  // 엄격한 방식으로 코드를 검증하라고 요청한다.
}());

(function() {
  'use strict';
}).bind(globals)();

const message = (function() {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long.`;
})();
console.log(message);

const f = (function() {
  let count = 0;
  return function() {
    return console.log(`I have been called ${++count} time(s).`);
  }
})();
f(); // "I have been called 1 time(s)."
f(); // "I have been called 2 time(s)."
// console.log(count); // error

let count = 0;
const c = function() {
  return console.log(`I have been called ${++count} time(s).`);
}
c();
c();
console.log(count);
