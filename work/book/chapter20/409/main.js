const fs = require('fs');
console.log(typeof fs); //object
// 이미 처리한 대상을 재 사용한다.
const fs2 = require('fs');
console.log(fs === fs2); //true 

// package.json 파일 설치 npm init -y
// colors 설치 npm i colors
const colors = require('colors');
console.log('Hello'.red);
console.log('Hello'.green);
console.log('Hello'.blue);


// book 폴더 밑에 있는 node_modules 폴더 밑에
// 설치되어 있는 것을 사용
// 관습적으로 _ 사용
const _ = require('lodash');

var array = [1];
var other = _.concat(array, 2, [3], [[4]]); 
// 원본함수를 건드리지 않는다.
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
