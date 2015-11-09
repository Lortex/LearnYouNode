var fs = require('fs');

var textFile = fs.readFileSync(process.argv[2]);
textFile = textFile.toString();
numberOfLines = textFile.split('\n').length - 1;
console.log(numberOfLines);

