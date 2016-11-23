function route(handle, query, res) {
    var func = handle[query.action];
    if (typeof func === 'function') {
        func(query, res);
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}

module.exports.route = route;