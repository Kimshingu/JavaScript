// Symbol()
var obj = {};
const SIZE = Symbol(); // new하면 안된다. 일반 메소드 사용하는 것처럼 호출한다.

console.log(SIZE); // Symbol()
console.log(typeof SIZE); // symbol

obj.x = 10; // 문자열 "x"로 취급한다.

obj[SIZE] = 8; // 유니크한 symbol을 property key로 사용하는 방법.
console.log(obj[SIZE]);
