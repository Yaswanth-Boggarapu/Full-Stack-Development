var http = require("http");
var exp = require("express");
var router = exp();
var bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended : true}));

router.get('/',function(req,res){
    res.sendFile(__dirname+'/Form.html')
});

var server = router.post('/send',function(req,res){
    const text = req.body.box;
    const count = text.length;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(count));
    res.end();
});

http.createServer(server).listen(8080,()=>{
    console.log("Server Listening at 8080")});