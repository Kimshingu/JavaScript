const fs = require('fs');
const path = require('path');

const ws = fs.createWriteStream(path.join(__dirname,'stream.txt'), { encoding: 'utf8' });

ws.write('line 1\n');
ws.write('line 2\n');
ws.end();
