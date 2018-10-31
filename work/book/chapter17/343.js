const input = "As I was going to Saint Ives";

// var obj = {};
// var arr = [];
// var regexp = /|./;

// 단어의 길이가 4~n인 대상을 찾는다.
var reg = /\w{4,}/ig;


console.log(reg instanceof RegExp); //true

const output = input.replace(reg, '****'); 
// "As I was ****
// to **** ****"
console.log(output);
