const fs = require('fs');

dir = __dirname + '/';
fs.writeFile(dir + 'hello.txt', 'hello from Node!', function(err) {
if(err) return console.log('Error writing to file.');
console.log('DONE.');
});
