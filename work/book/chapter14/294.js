const start = new Date();

let i = 0;

// 5초 후에 100이란 값이 함수의 매개변수로 전달
// 한번만 실행
setTimeout(function(val){
  console.log(val);
}, 5 * 1000, 100);

// 반복수행: 인터럽트 할때까지
const intervalId = setInterval(function(val){
  console.log(val);

  clearInterval(intervalId);
}, 2 * 1000, 100);

const intervalId = setInterval(function() {
  let now = new Date();
  if (now.getMinutes() !== start.getMinutes() || ++i > 10)
    return clearInterval(intervalId);
  console.log(`${i}: ${now}`);
}, 1 * 1000);
