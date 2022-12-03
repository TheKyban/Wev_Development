const { response } = require("express");
const express = require("express");
const app = express();
app.get('/',function(request,response){
    // console.log("sever started Aditya")
    response.send('<h1>hello world alpha</h1>');
});
app.get('/contact',(request,response)=>{
    response.send('contact me adad@gmail.com')
})
app.get('/about',function(req,res) {
    res.send("<h1>I'm Aditya</h1>");
});
app.get('/hobbies',(req,res)=>{
    res.send('I like code');
});
app.listen(3000, function(){
    console.log('server started on 3000');
});