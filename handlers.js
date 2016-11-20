let db = [];

function register(getData, res){
    if (!!getData["name"] && !!getData["quantity"]){
        let id = db.length;
        db[id] = {
            "id": id,
            "name": getData["name"],
            "quantity": Number(getData["quantity"])
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

function add(getData, res){
    if (!!getData["id"] && !!getData["quantity"] && !!db[getData["id"]]){
        let id = getData["id"];
        db[id].quantity += Number(getData["quantity"]);

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

function remove(getData, res){
    if (!!getData["id"] && !!getData["quantity"] && !!db[getData["id"]]){
        let id = getData["id"];
        db[id].quantity -= Number(getData["quantity"]);

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

function get(getData, res){
    res.writeHead(200, 'OK', {'Content-Type': 'application/json'});
    res.write(JSON.stringify(db));
    res.end();
}

module.exports = {register, add, remove, get};