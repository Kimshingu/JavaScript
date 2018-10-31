function divide(a,b){
  return a/b;
}

console.log(divide(3,2));
console.log(divide(3,0));

let arr = [10,20];
let value1 = arr[arr.length-1];
console.log(value1); //20
let value2 = arr[arr.length];
console.log(value2); //undefined

function getElement(index){
  let value = arr[index];
  if (value === undefined){
    throw new Error('Array index out of bound');}
  return value;
}



try{
  let value3 = getElement(2);
  console.log(value3);
} catch(e){
  console.log(e.message);
} finally{
  console.log('unconditional execution');
}
