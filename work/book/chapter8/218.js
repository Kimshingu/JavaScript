const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x);

/*
        a         x           return
1회전   5         7           12
2회전   12        2           14
3회전   14        4           18
4회전   
 */
console.log(sum);
