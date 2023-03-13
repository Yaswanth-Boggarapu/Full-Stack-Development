var net = require("net");
var PORT = 8081;
var server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Moshi Moshi Sekai!! \n');
    connection.pipe(connection);
});
server.listen(PORT, function() {
    console.log(`Server is listening. at ${PORT}`);
});