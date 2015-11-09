var fs = require('fs');

module.exports = readFile;

function readFile(directory, filter, callback) {
    fs.readdir(directory, function(err, list) {
        if (err) return callback(err);
        var fileList = list.filter(function(file) {
            return (file.indexOf('.' + filter) !== -1)
        });
        callback(null, fileList);
    });
}

