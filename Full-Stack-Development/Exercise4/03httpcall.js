var http = require('http');
const req = http.request(
    {
        hostname:'www.google.com',
        method:'GET',
        path:"/"
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
