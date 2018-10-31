const skipIt = false;
let x = 0;
const result = skipIt || x++;
// 첫번째 값이 의미가 있다면 첫번째 값을 할당하고
// 의미가 없다면 두번째 값을 할당한다.
console.log(result);
