const http = require('http');
const querystring = require('querystring');

function parse(data, type) {
    switch (type) {
        case 'application/json':
            data = JSON.parse(data);
            break;
        case 'application/x-www-form-urlencoded':
            data = querystring.parse(data);
            break;
    }

    return data;
}

function start(PORT, route, handle){
    const server = http.createServer(function(req, res){
        let data = '';

        req.on('data', chunk => data += chunk);
        req.on('end', () => {
            if (req.method == "POST"){
                data = parse(data, req.headers['content-type']);
            }
            else if(req.method == "GET"){
                let url = req.url.replace('/?', '');
                data = querystring.parse(url);
            }
            route(handle, data, res);
        });
    });

    server.on("error", err => console.error(err));
    server.listen(PORT);
}

module.exports.start = start;