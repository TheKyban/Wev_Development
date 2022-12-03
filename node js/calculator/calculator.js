const cal = require('express');
const bodyParser = require("body-parser");

const app = cal();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});
app.post('/',(req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`result:${result}`)
})

app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post('/bmicalculator',(req,res)=>{
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result2 = weight / (height*height);
    console.log(weight)
    console.log(height)
    // let result2 = weight + height;
    res.send("result "+ result2)
})
app.listen(3000,()=>{
    console.log('server started >>>>>');
});