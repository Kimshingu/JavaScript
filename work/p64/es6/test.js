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


// 프로젝트 폴더를 만든후 6코드를 dist 바꿀거야 55코드로 패키지제이슨을 만들어서 바벨 트랜스파일러 만들고
// 걸프한테 시킬거임 트랜스파일링을 하라고
// 그리고 백업할거임 git 근데 여기서 안함
// 바벨알씨이 알려줌 6코드라고
