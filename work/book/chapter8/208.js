// const arr = [1, 2, 3];
// var ret = arr.concat(4, 5, 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
// console.log(ret); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(arr); // [ 1, 2, 3 ]
// // 파라미터로 받은 1차원 배열은 풀어서 적용한다.
// arr.concat([4, 5, 6]); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
// arr.concat([4, 5], 6); // returns [1, 2, 3, 4, 5, 6]; arr unmodified
// arr.concat([4, [5, 6]]); // returns [1, 2, 3, 4, [5, 6]]; arr unmodified


const arr = [1, 2, 3, 4, 5];
arr.slice(3); // returns [4, 5]; arr unmodified
arr.slice(2, 4); // returns [3, 4]; arr unmodified
arr.slice(-2); // returns [4, 5]; arr unmodified
arr.slice(1, -2); // returns [2, 3]; arr unmodified
arr.slice(-2, -1); // returns [4]; arr unmodified

var ret = arr.slice();  
console.log(arr);
console.log(ret);
console.log(ret === arr); //false
