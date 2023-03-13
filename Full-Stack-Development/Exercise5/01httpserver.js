var http = require('http');
var PORT = 8081;
var bp = require('body-parser');
var express = require('express');
var app = express();


app.use(bp.urlencoded({extended:true}));


app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/01input.html')
});

var Server = app.post('/submit', (req,res)=>{
    input = req.body.input;
    var count = input.length;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(count));
    res.end();
}
);
http.createServer(Server).listen(PORT,()=>
{
    console.log(`listening at ${PORT}`);
})
