var name = "Tom";
var age = 33;
var address = 'Seoul Korea';

// var tag = ""+
//   "<div>" +
//    "<h3> ${name} <mark> ${age} </mark> </h3>" +
//    "<p> ${address} </p>" +
//   "</div>" +
// "";
// console.log(tag);

var html = `
  <div>
   <h3> ${name} <mark> ${age} </mark> </h3>
   <p> ${address} </p>
   </div>
`;
console.log(html);
// 표현식을 쓸 쑤 있다. ${} 변수 변수가 가지고있는 값이 그 사이로 들어간다.
// 템플릿 문자열
