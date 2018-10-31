'use strict';

function say({subject, verb, object}){
  console.log('${subject} ${verb} ${object}'); // 변수값을 결합시킬 수 있다.
}


const sentences = [
  {subject:'I', verb:'love', object:'you'},
  {subject:'You', verb:'love', object:'me'},
];


for (let s  of sentences) {  //배열이나 컬렉션 객채를 배치 //차례로 s에 다가 담아서 그걸 say 함수에 전달 // {subject:'I', verb:'love', object:'you'}가 전달됨
  say(s);
}
