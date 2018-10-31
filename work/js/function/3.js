var a = 10;

console.log(typeof a);


var b = "hi";

console.log(typeof b);

// console.log("Hello".length);

var c = true;

console.log(typeof c);

var d ={}; // 객체 생성
// new  연산자가 없으므로 설계도 없이도 객체를 생성 할 수 있다는 뜻이다.

console.log(typeof d);

var dd = new Object();

console.log(typeof dd);

// 원한다면 new 연산자로 함수를 생성자로 사용하여 새 겍체를 만들 수 있습니다.

var e = null; //null도 자료형으로 취급

console.log(typeof e); //object

var f;

console.log(typeof f);

var fn = function() {};

console.log(typeof fn); // 자료형이 아님, 개발자 편의를 위해서 문자열 리턴

var x = []; // 배열생성

console.log(typeof x);

var s = Symbol(); //객체의 프로퍼티 키로 유일성을 확보하기 위한 지원 기술

console.log(typeof s);
