var arr = Array(10).map(function(x) {
  return 5
});

  // var arr = new Array[10];
  var arr = Array(10).fill(5);
  console.log(arr);

var arr = [1, 2, 3, 4, 5];
delete arr[2]; // 해당 방의 값만 삭제
// 일반적으로 splice 함수를 사용하여 방 자체를 삭제
arr.map(x => 0); // [0, 0, <1 empty slot>, 0, 0]
console.log(arr);


var arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join(); // "1,,hello,,true,"
arr.join(''); // "1hellotrue"
arr.join(' -- '); // "1 -- -- hello -- -- true --"

const attributes = ["Nimble", "Perceptive", "Generous"];
var html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
// html: "<ul><li>Nimble</li><li>Perceptive</li><li>Generous</li></ul>";
var html = `
  <ul>
    <li> ${attributes.join('</li><li>')} </li>
  </ul>`;
console.log(html);
