let globalFunc; // undefined global function

// private: {} 연산자 안으로 감싸서 만드는것
{
  let some = 'hi';
  // 
  let blockVar = 'a'; // block-scoped variable

  globalFunc = function() {
    console.log(blockVar); // 
    //함수가 사용하는 외부자원(blockVar)과 같이 묶어서 스코프를 생성(클로저)
  }
}
globalFunc(); // logs "a"


let f; // undefined function
{
  let o = {
    note: 'Safe' // 파괴될 위험이 있다.
  }; // 객체를 만들때 쓰이는 {} 문법이지 범위 연산자 ...스코프가 아니다.
  f = function() {
    return o; 
  } //함수가 사용하는 외부자원(blockVar)과 같이 묶어서 스코프를 생성(클로저)
}
let oRef = f(); //함수를 실행한 결과를 변수에 저장한다. o가 할당된다.
//f 함수를 가리킴
oRef.note = "Not so safe after all!";
console.log(oRef.note);
