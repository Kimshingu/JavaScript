// 프락시는 ES6에서 새로 추가된 메타프로그래밍 기능이다.
// 메타프로그래밍이란 프로그램이 자기 자신을 수정하는 것을 말한다.
// 객체 프락시는 간단히 말해 객체에 대한 작업을 가로채고,
// 필요하다면 작업 자체를 수정하는 기능이다.

const coefficients1 = {
  a: 1,
  b: 2,
  c: 5,
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}
let result1= evaluate(5, coefficients1);
console.log(result1);

const coefficients2 = {
  a: 1,
  c: 3,
};
// evaluate 개발자의 의도와 다르게 부족한 값을 파라미터로 전달하면
// 계산이 정상적이지 않다.
// 어떻게 막을 수 있을까?
evaluate(5, coefficients2); // NaN
  
