// 데이터타입의 변환

const numStr = "33.3";
// const num = Number(numStr); new 연산자를 호출하는 순간 리턴 결과는 객체이다.
// const num = parseInt(numStr);
const num = Number.parseFloat(numStr); //Number. 생략가능
console.log(typeof num);

console.log(numStr+10); // 33.310
console.log(num+10); // 43.3


const d = new Date();
const ts = d.valueOf();
console.log(ts); //1536219050589

const n = 33.5;
// const s = n.toString();
const s = "" + n;
console.log(typeof s); //string

const n1 = 0;  //관습적으로 0:false, 1:true
const b1 = !!n; //boolean
const b2 = Boolean(n);
