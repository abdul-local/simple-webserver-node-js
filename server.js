const express=require('express');
const app=express();
app.get('/',(req,res)=>{
   res.send('hello word aja bro!')
})

//new route

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3,4,5]);
})
app.get('/api/courses/:id',(req,res)=>{
    res.send(req.params.id)
})

// multiple paramter
app.get('/api/posts/:yeart/:month',(req,res)=>{
    res.send(req.query)
})
// create port
const port=process.env.PORT ||3000;
app.listen(port,()=>
    console.log(`server listen to port ${port}..`))

