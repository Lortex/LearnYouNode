var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, data) {
    textFile = data.toString();
    numberOfLines = textFile.split('\n').length - 1;
    console.log(numberOfLines);
});

