function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const coefficients = {
  a: 1,
  c: 3,
};

// evaluate 개발자의 의도와 다르게 부족한 값을 파라미터로 전달하면
// 계산이 정상적이지 않다.
// 어떻게 막을 수 있을까?

const betterCoefficients = new Proxy(coefficients, {
  // Get Trap
  // 객체의 프로퍼티의 값을 가져가러 할 때 기동하는
  // 트랩(미리 사용처가 정해진 프락시 로직용 함수) 객체이다.
  get(target, key) {
    return target[key] || 0;
  },
});

let result1 = evaluate(5, betterCoefficients);
console.log(result1);
