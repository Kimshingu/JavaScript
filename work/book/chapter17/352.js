let str = ' something ';
console.log(str.length); // 11
let result = str.trim(); // 공백 제거
console.log(result.length); // 9

// ^\s|\s$ 공백으로 시작하고 공백으로 끝난 걸 찾아라.
let result2=str.replace(/^\s|\s$/g,'');
console.log(result2.length); //9

const beer99 = "99 bottles of beer on the wall " +
"take 1 down and pass it around -- " +
"98 bottles of beer on the wall.";
// 3자리숫자|2자리숫자|1자리숫자
const match = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/); //[0-9]{1,3}
// 1자리숫자|2자리숫자|3자리숫자 => 순서도 중요하다
const match2 = beer99.match(/[0-9]|[0-9][0-9]|[0-9][0-9][0-9]/); //한 문자로 search

let name = "Heungmin Son";
name = name.replace(/(\w+)\s(\w+)/,"$2 $1");  // (\w+) 단어 (\w) 한 글자
console.log(name); // Son Heungmin
