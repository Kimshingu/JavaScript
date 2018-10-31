// console.log(add());
// 
// // 함수표현식
// var add = function () {
//   return 10;
// };
// 
// console.log(add());
// 
// var add = function () {
//   return 20;
// };
// 
// console.log(add());
// 
var user = {
  name: "unikys",
  homepage: "unikys.tistory.com",
  language: "Korean"
}
with(user) {
  console.log(name === "unikys");
  console.log(homepage === "unikys.tistory.com");
  console.log(language === "Korean");
  language = "javascript";
}
console.log(user.language === "javascript");
