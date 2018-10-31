const fs = require('fs');

fs.readdir('data', function(err, files) {
  if (err) {
    console.error("Fatal error: couldn't read data directory.");
    process.exit(1); // 비정상종료
  }
  const txtFiles = files.filter(f => /\.txt$/i.test(f)); //$: 끝나는
  if (txtFiles.length === 0) {
    console.log("No .txt files to process.");
    process.exit(0); // 정상종료
  }
  // process .txt files...
  console.log(txtFiles.join('\n'));
});
