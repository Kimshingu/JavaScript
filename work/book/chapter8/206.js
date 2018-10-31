// array literals
const arr1 = [1, 2, 3]; // array of numbers
const arr2 = ["one", 2, "three"]; // nonhomogeneous array
const arr3 = [[1, 2, 3], ["one", 2, "three"]]; // array containing arrays
const arr4 = [ // nonhomogeneous array
  { name: "Fred", type: "object", luckyNumbers : [5, 7, 13] }, // 객체
  [
    { name: "Susan", type: "object" },
    { name: "Anthony", type: "object" },
  ], // 배열
  1, // 숫자
  function() { return "arrays can contain functions too"; }, // 함수
  "three", // 문자열
];

// accessing elements
arr1[0]; // 1
arr1[2]; // 3
arr3[1]; // ["one", 2, "three"]
arr4[1][0]; // { name: "Susan", type: "object" }
// array length
arr1.length; // 3
arr4.length; // 5
arr4[1].length; // 2
// increasing array size
arr1[4] = 5;
arr1; // [1, 2, 3, undefined, 5]
arr1.length; // 5

// 배열의 현재 길이보다 큰 인덱스에 접근하는 것만으로 
// 배열의 길이가 늘어나지는 않습니다.
arr2[10]; // undefined
arr2.length; // 3

// Array constructor (rarely used)
const arr5 = new Array(); // empty array
const arr6 = new Array(1, 2, 3); // [1, 2, 3]
const arr7 = new Array(2); // array of length 2 (all elements undefined)
const arr8 = new Array("2"); // ["2"]
