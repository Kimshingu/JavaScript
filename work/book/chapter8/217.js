/*
arr.reduce(callback[, initialValue])
callback: 함수
initialValue: 초기값(시드값)
arr이 가리키는 배열의 길이만큼 callback 함수를 호출한다.

 */

const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0);
/*
        a         x           return
1회전   0         5           5
2회전   5         7           12
3회전   12        2           14
4회전   14        4           18
 */
console.log(sum);
