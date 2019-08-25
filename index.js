const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const user = require("./model/user");

const app = express();
app.listen(9000);

app.use(bodyparser.urlencoded({extended : false}));

app.get("/api/user/:id", function(req, res){
    try {
        user.getUser(req.params.id,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post("/api/user", function(req, res){
    try {
        user.insertUser(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                user.getUser(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
});

app.put("/api/user/:id", function(req, res){
    try {
        user.updateUser(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                user.getUser(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);
        
    }
})

app.delete("/api/user/:id", function(req, res){
    try {
        user.deleteUser(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})