var http = require('http');
const req = http.request(
    {
        hostname:'localhost',
        method:'GET',
        port: 80,
        path:"/api/"
    },
    function (response)
    {
        response.setEncoding("utf8");
        response.on('readable',function()
        {
            console.log(response.read());
        })
    });
req.on('error', error=>{
    console.error(error);
});

req.end();
