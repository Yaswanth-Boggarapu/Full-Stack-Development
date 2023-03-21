var net = require("net");
var server = net.createServer(function(connection) 
{
    console.log('Client connected.');
    connection.on('end', function() 
    {
        console.log('Client disconnected.');
    });
    connection.write("Yash");
    connection.pipe(connection);
});

server.listen(8000, function() 
{
    console.log('Server Listening');
});
