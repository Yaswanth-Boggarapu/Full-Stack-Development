var express = require('express');
var nodemailer = require('nodemailer');
var PORT = 8082;
const app = express();
app.listen(PORT,(req,res)=>{
    console.log(`app is listening at port number ${PORT}`);
});
async function main()
 {

    //let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: 
      {
        user: "yaswanth7868@gmail.com", 
        pass: "arvpmoaihsmxtuky",
      }
    });
  
    let info = await transporter.sendMail({
        from: "yaswanth7868@gmail.com",
        to: "sweeton2001@gmail.com",
        subject: "Moshi moshi!", 
        text: "Orewa kaizokuoa ni naru otoko dha!!", 
      });
  }
  
  main().catch(console.error);