const app = require('express')();
const cors = require('cors');
const request = require('request');
app.use(cors());

app.get('/local',(req,res)=>{
    console.log('local request');
    //res.send("This is local api");
    request.get('http://localhost:4000/azure',(err,data,body)=>{
        console.log(JSON.stringify(body));
        res.send('this is local api and '+JSON.stringify(body));
    })
})

app.listen(5000,()=>{
    console.log('local app running locally');
})
