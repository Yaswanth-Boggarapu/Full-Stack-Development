//var express = require('express');
var nodemailer = require('nodemailer');
// var PORT = 8082;
// const app = express();
// app.listen(PORT,(req,res)=>{
//     console.log(`app is listening at port number ${PORT}`);
// });
async function main()
 {

    //let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "outlook",
      auth: 
      {
        user: "yaswanth7868@outlook.com", 
        pass: "Yaswanth123.",
      }
    });
  
    let info = await transporter.sendMail({
        from: "yaswanth7868@outlook.com",
        to: "yaswanth7868@gmail.com",
        subject: "Moshi moshi!", 
        text: "Orewa kaizokuoa ni naru otoko dha!!", 
      });
  }
  
  main().catch(console.error);