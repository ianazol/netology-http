function route(handle, getData, res) {
    var func = handle[getData.action];
    if (typeof func === 'function') {
        func(getData, res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}

module.exports.route = route;