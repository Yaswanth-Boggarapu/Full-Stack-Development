var net = require('net');
var client = net.connect({port: 8081}, 'localhost', function() {
    console.log('Connected to Server.');
});

client.on('data', function (data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function () {
        console.log('Disconnected from server.');
});