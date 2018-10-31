//4. for문에서 String객체 사용하기

function StringBuilder() {
    this._array = [];
    this._index = 0;
}

StringBuilder.prototype.append = function (str) {
    this._array[this._index] = str;
    this._index++;
}

StringBuilder.prototype.toString = function () {
    return this._array.join("");
}

var sb = new StringBuilder();

for (var i = 0; i < 10; i++) {
  sb.append(i);
}

console.log(sb.toString());
