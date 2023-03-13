var http = require('http');
//var axios = require('axios');
var options = {
    host: 'localhost',
    port: '8081',
    path: '/01input.html'
};

// const res = axios.get('http://localhost:8081');
// res.data;

var callback = function (response) {
    var body = '';

    //response.send(body)
    response.on('data', function (data)
    {
        body += data;
        
    });
    response.on('end',function()
    {
        response.send(body);
        console.log('someone connected!');
    });

    response.on('error', (error)=>
    {
        console.error(error);
        //console.log('someone connected!');
    });


};
var req = http.request(options, callback);
req.end();