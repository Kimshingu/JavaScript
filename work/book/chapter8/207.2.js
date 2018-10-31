// var str = "hello";
// str= str.split('').reverse().join('');
// console.log(str);

function myReverse(input = ""){
  // let ary = [];
  // for (var i = 0; i < input.length; i++) {
  //   ary[i] = input[i];
  // }
  let ary = input.split(''); //[ 'h', 'e', 'l', 'l', 'o' ]

  // let size = ary.length;
  // let arr = [];
  // for (var i = 0; i < size; i++) {
  //   arr[i] = ary.pop();
  // } 
  let arr = ary.reverse(); //[ 'o', 'l', 'l', 'e', 'h' ]


  let output = arr.join('');
  return output;
}
console.log(myReverse("hello")); //olleh
