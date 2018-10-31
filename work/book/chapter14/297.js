function SumAsync(start, end, cb){

  setTimeout(function(){
    let result = 0;
    for (var i = start; i <= end; i++) {
      result += 1;
    }
    
    let existError = false;
    if (Math.random() < 0.5) {
      existError = true;
    }
    
    if (existError) {
      let e = new Error('every code is possible to be abnormal ');
      // 관습 룰
      // 에러가 발생하면
      // 첫 번째 파라미터는 에러객체, 그다음은 모두 null
      // 에러가 발생하지 않으면
      // 첫 번째 파라미터는 null, 그 다음은 처리 결과 데이터
      cb(e, null);
    } else {
      cb(null, result);
    }
  }, 0);
}

let oldTime = Date.now();

try {
  // 비동기 함수는 try 구문으로 에러를 잡을 수 없다.
  // 왜냐하면, 메인 스레드가 비동기 함수를 호출하고
  // 바로 다음 줄 코드를 처리하기 위해서 내려간다.
  // 비동기 함수는 아직 제대로 코드를 수행하기도 전이므로
  // 에러가 발생할 틈이 없기 때문이다.
  SumAsync(1,2000, function(error, result){
    if(error){
        console.log('error: '+ error.message);
        return;
    }
    console.log(result);
  });
} catch (e) {
  console.log('영원히 작동하지 않는다.');
} finally {
  
}

let newTime = Date.now();
console.log('Elapsed Time = ' +(newTime-oldTime));

console.log('urgent processing logic');

// while (Date.now() < newTime + 20000) {
// 
// }
