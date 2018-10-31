console.log('START');

function fn() {
  console.log(i);
}

for (var i = 1; i <= 3; i++) {  
  setTimeout(fn,1000); // 자바의 쓰레드슬립
}

console.log('END');

// START
// END
// 4
// 4
// 4
