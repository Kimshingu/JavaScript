var arr = new Array(5).fill(1); // arr initialized to [1, 1, 1, 1, 1]
arr.fill("a"); // arr is now ["a", "a", "a", "a", "a"]
arr.fill("b", 1); // arr is now ["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4); // arr is now ["a", "b", "c", "c", "b"]
arr.fill(5.5, -4); // arr is now ["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1); // arr is now ["a", 5.5, 0, 0, 5.5]



var arr = [5, 3, 20, 4, 112];
arr.sort(); // arr is now [ 100, 20, 3, 4, 5 ]

// 문자열로 취급하여 정렬한다. 
// var arr = [5, 3, 20, 4, 112];
arr.sort(function(item1, item2){
  return item1 > item2;
});
console.log(arr); //[ 3, 4, 5, 20, 112 ]
// 정렬 시 개발자가 전달해 준 익명함수를 comparator 로직을 사용하여
// 어떤 값이 큰 지 판단한다.

var arr = [
  { name: "Suzanne" }, 
  { name: "Jim" },
  { name: "Trevor" }, 
  { name: "Amanda" }
];

arr.sort(); // arr unchanged
arr.sort((a, b) => a.name > b.name); // arr sorted alphabetically
// by name property
console.log(arr);
arr.sort((a, b) => a.name[1] > b.name[1]); // arr sorted reverse alphabetically
// by second letter of name property
console.log(arr);
