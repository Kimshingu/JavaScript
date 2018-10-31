// int a = 10;
// Integer b = a;
// auto-boxing: 원시타입 a의 값이 자동으로
// 객체타입 Integer 자료형의 변수에 할당된다.
// short x =(short) a;

// JS 원시타입이 분명히 존재한다.
// 코드 처리 시 원시타입이 자동으로 객체타입으로
// 전환되어 처리됩니다. ==> 처리 시 모두 객체로 취급된다.

// java 래퍼클래스 기능 
const s = "hello";

console.log(s.toUpperCase());
console.log(s); // 함수를 호출하는 즉시 임시 객체를 파괴한다.

s.myProp = 3;
console.log(s);
console.log(s.myProp); //undefined
