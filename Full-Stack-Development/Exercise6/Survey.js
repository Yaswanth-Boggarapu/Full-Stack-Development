var mongoose = require('mongoose');
var express = require('express');
var bp = require('body-parser');
var app = express();
var PORT = 8000;
mongoose.connect('mongodb://localhost:27017/New').then(
    ()=>
    {
        console.log("MongoDB Connected Successfully");
    }
);

const SurDB = mongoose.model('SurveyDB',
new mongoose.Schema(
    {
        name: String,
        gender: String,
        age: Object,
        phno: Number,
        language: Object,
        first: String,
        fav: String
    }
));

app.use(bp.urlencoded({extended: true}));

app.listen(PORT,()=>{
    console.log(`Server is peeking at ${PORT}`);
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/Survey.html');
})

app.post('/SurveyApp', async(req,res)=>{
    let{name, gender, age, phno, language, first, fav} = req.body;
    await new SurDB({name, gender, age, phno, language, first, fav}).save();
    const results = await SurDB.find({});
    const html = `
    <h3>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp&nbsp;&nbsp;&nbsp;&nbsp;Fav. Anime </h3>
    <p>
    ${results.map((SurveyDB)=>`<li>${SurveyDB.name} - ${SurveyDB.fav}</li>`).join("")}
    </p>`;
    // const html2 = `
    
    // <table align = "center">
    // <tr>
    //  <td>Name</td>
    //  <td>Fav. Anime</td>
    // </tr>
    // ${results.map((SurveyDB)=>`
    // <tr>
    //  <td>${SurveyDB.name}</td>
    //  <td>${SurveyDB.fav}</td>
    // </tr>
    // </table>`)}`;
    res.send(html);
});