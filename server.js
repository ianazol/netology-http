const http = require('http');
const querystring = require('querystring');

function start(PORT, route, handle){
    const server = http.createServer(function(req, res){
        let url = req.url.replace('/?', '');
        let getData = querystring.parse(url);

        route(handle, getData, res);
    });

    server.on("error", err => console.error(err));
    server.listen(PORT);
}

module.exports.start = start;