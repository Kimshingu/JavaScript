let obj = {
  a:10, 
  b:20, 
  cc: function(){console.log('Hello');}
};

let keys =Object.keys(obj); 
// 전달받은 객체의 프로퍼티를 배열로 리턴
console.log(typeof keys); // 배열도 객체 object
console.log(Array.isArray(keys)); // 배열 체크 true
console.log(keys); 

Object.keys(obj) // [ 'a', 'b', 'cc' ]
  .filter(prop => prop.length < 2 ) // [ 'a', 'b' ]
  .forEach(prop => 
    console.log(`${prop}:${obj[prop]}`));
