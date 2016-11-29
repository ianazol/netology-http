let db = [];

function register(query, res){
    if (query.name){
        let id = db.length,
            quantity = Number(query.quantity) || 0;

        db[id] = {
            "id": id,
            "name": query.name,
            "quantity": quantity
        };

        res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            'id': id,
            "name":db[id].name,
            "quantity": db[id].quantity
        }));
    } else{
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.write("400 Bad Request");
    }
    res.end();
}

function add(query, res){
    if (query.id && query.quantity && db[query.id]){
        let id = query.id;
        db[id].quantity += Number(query.quantity);

        res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            'id': Number(id),
            "name": db[id].name,
            "quantity": db[id].quantity
        }));
    } else{
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.write("400 Bad Request");
    }
    res.end();
}

function remove(query, res){
    if (query.id && query.quantity && db[query.id]){
        let id = query.id;
        db[id].quantity -= Number(query.quantity);
        if (db[id].quantity < 0)
            db[id].quantity = 0;

        res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
        res.write(JSON.stringify({
            'id': Number(id),
            "name": db[id].name,
            "quantity": db[id].quantity
        }));
    } else{
        res.writeHead(400, {"Content-Type": "text/plain"});
        res.write("400 Bad Request");
    }
    res.end();
}

function get(query, res){
    res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
    res.write(JSON.stringify(db));
    res.end();
}

module.exports = {register, add, remove, get};