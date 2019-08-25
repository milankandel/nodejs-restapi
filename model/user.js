const mysql = require("mysql");

const db = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password    : "",
    database    : "shopping"
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected ");
    }
});


exports.getUser = function(id, callback){
    let sql = `SELECT * From customers WHERE id = ?`;
    db.query(sql, [id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.insertUser = function(data, callback){
    let sql = "INSERT into customers set ?";

    db.query(sql, [data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}

exports.updateUser = function(id, data, callback){
    let sql = "update customers set ? where id = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.deleteUser = function(id, callback){
    let sql = "DELETE from customers where id = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}