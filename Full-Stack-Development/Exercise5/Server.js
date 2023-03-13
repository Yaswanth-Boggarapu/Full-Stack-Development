var http = require("http");

http.createServer(function(req,res){
    console.log("Disconneced");
    res.on('end',function(){
        console.log("Connected");
    });
    res.write("Hello");
    res.pipe(conn)
})