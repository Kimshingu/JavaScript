function sum(start, end){
  let result = 0;
  for (var i = start; i <= end; i++) {
    result += 1;
  }
  return result;
}

let oldTime = Date.now();

let value =sum(1,2000000000);
console.log(value);

let newTime = Date.now();
console.log('Elapsed Time = ' +(newTime-oldTime));

console.log('urgent processing logic');
