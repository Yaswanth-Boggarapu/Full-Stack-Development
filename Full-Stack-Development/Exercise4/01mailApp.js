var express = require('express');
var nodemailer = require('nodemailer');
var PORT = 8081;
const app = express();
app.listen(PORT,(req,res)=>{
    console.log(`app is listening at port number ${PORT}`);
});
async function main()
 {

    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: 
      {
        user: testAccount.user, 
        pass: testAccount.pass,
      }
    });
  
    let info = await transporter.sendMail({
        from: "monkeydluffy@example.com",
        to: 'rornoazoro@example.com',
        subject: "Moshi moshi!", 
        text: "Orewa kaizokuoa ni naru otoko dha!!", 
      });
  
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    app.get('/',(req, res)=>{
        res.redirect(nodemailer.getTestMessageUrl(info));
        //res.send("Visit the following URL for preview: %s", nodemailer.getTestMessageUrl(info));
    });
  }
  
  main().catch(console.error);