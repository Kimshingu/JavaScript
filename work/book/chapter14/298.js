// Callback's Hell

console.log(1);
setTimeout(function(){
  console.log(2);
  setTimeout(function(){
    console.log(3);
    setTimeout(function(){
      console.log(4);
    },0);
    console.log(5);
  },0);
  console.log(6);
},0);
console.log(7);
