var fileModule = require('./exercise6_1.js');

fileModule(process.argv[2], process.argv[3], doneReading);

function doneReading(err, list) {
    list.forEach(function(file) {
        console.log(file);
    });
}

