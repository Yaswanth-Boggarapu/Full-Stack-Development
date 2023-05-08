var exp = require("express")
var router = exp();
var bodyparser = require("body-parser")
var mongoose = require("mongoose");

router.use(bodyparser.urlencoded ({extended : true}))

router.get("/",function(req,res){
    res.sendFile(__dirname+'/Quiz.html')
});

router.post("/send", async function(req,res){
  try { 
    await mongoose.connect('mongodb://0.0.0.0:27017/FullStackQuiz', { useNewUrlParser: true });
    console.log('Connected to database!');

    const schema = new mongoose.Schema({
      Ques_no : {
        type : Number,
        required : true
      },
      Ans : {
        type : String,
        required : true
      }
    });

    const table = mongoose.model('answers', schema);

    const data1 = await table.find({Ques_no : 1});
    const data2 = await table.find({Ques_no : 2});
    const data3 = await table.find({Ques_no : 3});
    const data4 = await table.find({Ques_no : 4});
    const data5 = await table.find({Ques_no : 5});
    const data6 = await table.find({Ques_no : 6});

    const formValue1 = req.body.q1;
    const formValue2 = req.body.q2;
    const formValue3 = req.body.q3;
    const formValue4 = req.body.q4;
    const formValue5 = req.body.q5;
    const formValue6 = req.body.q6;

    const matchingData1 = data1.find((d) => d.Ans === formValue1);
    const matchingData2 = data2.find((d) => d.Ans === formValue2);
    const matchingData3 = data3.find((d) => d.Ans === formValue3);
    const matchingData4 = data4.find((d) => d.Ans === formValue4);
    const matchingData5 = data5.find((d) => d.Ans === formValue5);
    const matchingData6 = data6.find((d) => d.Ans === formValue6);

    // console.log(matchingData1,matchingData2,matchingData3,matchingData4,matchingData5,matchingData6)

    if (matchingData1 && matchingData2 && matchingData3 && matchingData4 && matchingData5 && matchingData6) 
    {
      res.send('All Answers Are Correct!');
    } 
    else if(matchingData1 && matchingData2 && matchingData3 && matchingData4 && matchingData5 && !matchingData6)
    {
      res.send('All Answers Are Correct But Question 6 Is Incorrect');
    }
    else if(matchingData1 && matchingData2 && matchingData3 && matchingData4 && !matchingData5 && matchingData6)
    {
      res.send('All Answers Are Correct But Question 5 Is Incorrect');
    }
    else if(matchingData1 && matchingData2 && matchingData3 && !matchingData4 && matchingData5 && matchingData6)
    {
      res.send('All Answers Are Correct But Question 4 Is Incorrect');
    }
    else if(matchingData1 && matchingData2 && !matchingData3 && matchingData4 && matchingData5 && matchingData6)
    {
      res.send('All Answers Are Correct But Question 3 Is Incorrect');
    }
    else if(matchingData1 && !matchingData2 && matchingData3 && matchingData4 && matchingData5 && matchingData6)
    {
      res.send('All Answers Are Correct But Question 2 Is Incorrect');
    }
    else if(!matchingData1 && matchingData2 && matchingData3 && matchingData4 && matchingData5 && matchingData6)
    {
      res.send('All Answers Are Correct But Question 1 Is Incorrect');
    }
    else
    {
      res.send('All Answers Are Incorrect');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error connecting to database');
  }
});

router.listen(8080,console.log("Server Listening"));