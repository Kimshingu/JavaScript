// 자바스크립트나 노드가 제공하는 비동기 함수를 선택하여 사용
// 또는 브라우저가 제공하는 웹워커 기술을 사용하여
// 시간이 오래걸리는 로직을 위임할 수 도 있다.
// 또는 시간이 오래걸리는 블럭연산을 다른 서버  API에게
// 요청하여 그 결과를 받아서 사용할 수 있다.

// #1: 노드가 제공하는 비동기 함수를 따라해보자.
function SumAsync(start, end, cb){
  // setTimeout 함수에 전달한 cb함수가 기동하기 위한 2가지 조건
  // 1. 시간이 지나야 한다.
  // 2. 개발자가 사용할 수 있는 단 하나의 메인쓰레드가
  // 다른 일을 하고 있지 않는 IDLE 상태여야 한다.
  
  setTimeout(function(){
    let result = 0;
    for (var i = start; i <= end; i++) {
      result += 1;
    }
    cb(result);
  }, 0);
}

// function sumSync(start, end){
//   let result = 0;
//   for (var i = start; i <= end; i++) {
//     result += 1;
//   }
//   return result;
// }

let oldTime = Date.now();

SumAsync(1,2000, function(result){
  let value = result;
  console.log(value);
});

let newTime = Date.now();
console.log('Elapsed Time = ' +(newTime-oldTime));

console.log('urgent processing logic');

// 여기서부터 코드가 없으므로 메인스레드는 IDLE 상태가 된다.

// while (Date.now() < newTime + 20000) {
// 
// }
