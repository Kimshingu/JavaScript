/*
 JS 함수는 2가지 역할을 수행한다.
 1. 생성자 : 새 객체를 얻는다.
 함수를 new 연산자와 같이 사용하면 생성자
 2. 메소드 : 파라미터를 주고 메소드 내로지이 처리한 후 결과를 리턴 받는다.
 */

function add(a, b) {
  return a+b;
}

var result = add(2,3);
console.log(result);

var obj = new add(2,3);
console.log(obj);
