const express = require('express');
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors = require('cors');

const app = express();

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'151997',
    database:'chatbot'
});

connection.connect(function(err){
    err?console.log(err):console.log('connection');
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//apis begin


function myfun(Query1,q_id){
            connection.query(Query1,(err,results)=>{
            if(results.length===1){
                let yo = results;
                let x = yo[0].key_id;
                console.log(x);
                return x;
            }
        });
}


app.post("/",(req,res)=>{
    const word = req.body.word;
    const Query1="select key_id from keywords where keyword = '"+word+"';";
    connection.query(Query1,(err,results)=>{
        if(results.length===1){
            // res.status("200");
            obj = {
                word:results[0].key_id
            }
            res.json(obj);
        }
        else{
            res.status("201");
        }
    });
});
//apis end

app.listen(5000,() =>{
    console.log("Listening at port 5000");
});