var fs = require('fs');

fs.readdir(process.argv[2], function doneReading(err, list) {
    fileList = list.filter(function(file) {
        return (file.indexOf('.' + process.argv[3]) !== -1);
    });
    fileList.forEach(function(file) {
        console.log(file);
    })
});

