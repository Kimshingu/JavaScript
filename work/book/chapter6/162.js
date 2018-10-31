const obj = { b: 2, c: 3, d: 4 };

let a, b, c;
console.log(a,b,c); //undefined undefined undefined
// this produces an error:
//{a, b, c} = obj;

({a, b, c} = obj);
//객체를 해체해서 obj 프로퍼티 키의 이름과 같은 키에 값을 할당한다.
console.log(a,b,c); //undefined 2 3

// a normal array
const arr = [1, 2, 3];
// array destructuring assignment

let [x, y] = arr;
console.log(x,y);
// x; // 1
// y; // 2
// z; // error: z hasn't been defined

// 배열은 순서 기반으로 값을 할당한다.
const arr2 = [1, 2, 3, 4, 5];
// ...rest: 나머지 파라미터 나머지 값들을 모아서 배열로 할당한다.
let [x2, y2, ...rest2] = arr2;

console.log(x2); // 1
console.log(y2); // 2
console.log(rest2); // [3,4,5]
console.log(Array.isArray(rest2)); // true

// 해체 할당은 코드 축약법이다.

let a2 = 5, b2 = 10;
[a2, b2] = [b2, a2];
console.log(a2); // 10
console.log(b2); // 5
