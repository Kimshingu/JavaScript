// 조건문

if(true){}
if(true){} else{}
var array = [10,20,30];
for (var i = 0; i < array.length; i++) {console.log("array["+i+"] = " + array[i]);}

var object = {x:10 , y:20};

// for~in 문은 객체의 프로퍼티(속성, 자바:멤버변수) 개수만큼
// 하나씩 자동을 회전하여 수행된다.
for (var prop in object) {if (object.hasOwnProperty(prop)) {console.log("object["+prop+"] ="+ object[prop]);}}

var iterable = array;

// for~of 문은 iterable r객체를 대상으로 사용합니다.
// 배열은 이미 iterable 객체입니다.
//
for (item of iterable) {console.log("item = " + item);}

var k =0;
while (k<3) {k++; console.log("k ="+ k);}
do {} while (true);

switch (expression) {
  case expression:
    break;
  default:

}
