const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

arr.indexOf(5); // returns 1
arr.lastIndexOf(5); // returns 5

arr.indexOf("a"); // returns 2
arr.lastIndexOf("a"); // returns 2

arr.indexOf({ name: "Jerry" }); // returns -1

arr.indexOf(o); // returns 3
arr.indexOf([1, 2]); // returns -1

arr.indexOf("9"); // returns 7
arr.indexOf(9); // returns -1

 // indexOf(찾는문자(숫자), 범위지정)
// console.log(arr.indexOf("a", 2));
// console.log(arr.indexOf(5, 5));

// lsdtindexOf(찾는문자(숫자), 범위지정)
console.log(arr.lastIndexOf(5,5)); // returns 1
console.log(arr.lastIndexOf(true,4)); // returns -1
