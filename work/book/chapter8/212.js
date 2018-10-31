var arr = [
  { id: 5, name: "Judith" }, 
  { id: 7, name: "Francis" }
];

// 해당 인덱스 반환
arr.findIndex(o => o.id === 5); // returns 0
arr.findIndex(o => o.name === "Francis"); // returns 1
arr.findIndex(o => o === 3); // returns -1
arr.findIndex(o => o.id === 17); // returns -1

// 해당 객체 반환
arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" }
arr.find(o => o.id === 2); // returns null

var arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // returns 4
// x: 배열의 요소 값,  i: for 문의 회전 인덱스 
// i>2 : i가 0,1,2인 인덱스는 무시하고
// isInteger() return boolean -> true 인 경우 해당 값을 리턴
