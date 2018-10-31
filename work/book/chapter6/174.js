// 새로운 문법을 배울 떄 그 문법을 이해했는가?
// 쉽게 판단하는 기준은: 신규 문법을 옛 문법으로
// 변경할 수 있다면 제대로 이해한 것을 의미한다.


function getSentence({ subject, verb, object }) {
return `${subject} ${verb} ${object}`;
}

// 옛 문법
function getSentence(obj) {
  var subject = obj.subject;
  var verb = obj.verb;
  var object = obj.object;

  return subject + ' ' + verb + ' ' + object;
}


const o = {
subject: "I",
verb: "love",
object: "JavaScript",
};
console.log(getSentence(o));

// 객체가 파라미터 값으로 전달
// value를 직접 할당하고 싶어서


function addPrefix(prefix, ...words) {
// we will learn a better way to do this later!
//
const prefixedWords = [];

for(let i=0; i<words.length; i++) {
prefixedWords[i] = prefix + words[i];
}
return prefixedWords;
}
addPrefix("con", "verse", "vex"); // ["converse", "convex"]
