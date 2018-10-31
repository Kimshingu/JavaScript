var ary = [10,20,30];

var fn = function (item,index,array) {
  console.log(item, index, array);
  return false;
};

ary.find(fn);
// 값, 인덱스, 원본배열
// 10 0 [ 10, 20, 30 ]
// 20 1 [ 10, 20, 30 ]
// 30 2 [ 10, 20, 30 ]

var ret = ary.find(function (item,index,array) {
  let isFinded = item > 25 && index> 0;
  return isFinded;
});

console.log(ret);
