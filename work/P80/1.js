// 숫자, 문자열은 immutable입니다.

var pi=3.14;
var str = "Hello";
var str2 = "Hello";
var str3= new String ("Hello"); //Bad!
// 취급하는 값은 동일하지만 취급하는 방법은 다를 수 있다.
// 이미 존재하는 생성자 함수 String을 생성하여 새 객체를 만들어서 보관하고 있다.
// 원시 타입은 크기가 고정이고 객체타입은 크기가 미정이다. 즉, 문자열은 객체이다.
// 객체는 heap 메모리에 들어간다.

console.log(str);
console.log(str2);
console.log(str3);
console.log(str3.toString());
// 자바에서는 13,14 코드 출력값은 동일

// == 동등비교 연산자 : 취급하는 값이 같은지 비교 자바의 equals()
// === 동일비교 연산자 : 메모리가 같은지 비교     자바의 ==

console.log(str == str2); // true
console.log(str === str2); // true

console.log(str == str3); // true
console.log(str === str3); // false

var txt = "";

for (var i = 0; i < 10; i++) {
  txt += i; //Bad!
}

console.log(txt);

// 힙메모리에 빈 문자열을 가지고 있고 한번 값을 보관하고 있으면 여기다가 덮어쓰기가 불가능하다.
// 덮어쓰기가 안되니까 새로운 스트링 객체를 만들고 0이란 문자열을 집어넣는다.
// immutable은 값을 바꿀 수 없으니까 for 문  수행하는 만큼 생긴다.
// 자바에서는 이때 Stringbuffer를 사용하지만 자바스크립에서는 없다.

//3. 원시타입과 객체
