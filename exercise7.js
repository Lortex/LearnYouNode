var http = require('http');
var fs = require('fs');

function afterReady(err, res) {
    alert(res);
}

http.createServer(function (req, res) {
    http.get(process.argv[2], function(err, res) {
        if (err) throw err;
        afterReady(null, res);
    });
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
}).listen(3500);

