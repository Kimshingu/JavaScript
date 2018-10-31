var arr = [1, 5, 7];

var ret = arr.splice(1, 1,'a');
console.log(arr); // [ 1, 'a', 7 ]
console.log(ret); // [ 5 ]

var arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4); // returns []; arr is now [1, 2, 3, 4, 5, 7]
console.log(arr);
arr.splice(5, 0, 6); // returns []; arr is now [1, 2, 3, 4, 5, 6, 7]
console.log(arr);
arr.splice(1, 2); // returns [2, 3]; arr is now [1, 4, 5, 6, 7]
console.log(arr);
arr.splice(2, 1, 'a', 'b'); // returns [5]; arr is now [1, 4, 'a', 'b', 6, 7]
console.log(arr);

var arr = [1, 2, 3, 4];
// copyWithin(붙어 넣을 위치, 복사 시작위치, 복사 종료 위치 전)
arr.copyWithin(1, 2); // arr is now [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); // arr is now [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); // arr is now [3, 1, 1, 3]

var str = 'Hello World!'; // Hello World! 
var ret = str.substr(0,3); //Hel // substr(시작, 길이)

var ret = str.substring(0,3); //Hel  // substring(시작,끝 전)
