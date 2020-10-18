const express = require('express')
const app=express();
const data=[
    {id:1, name:"abdul",email:'abdullah.hamzan@gmail.com'},
    {id:2, name:"hipzil",email:'hipzil321@gmail.com'},
    {id:3, name:"agus",email:'odimana05@gmail.com'},
    {id:4, name:"bro",email:'bro.hamzan@gmail.com'},
    
];

app.get('/',(req,res)=>{
    res.send('Hellow wold')
})
// new route
app.get('/api/courses/:id',(req,res)=>{
  const course= data.find(c=>c.id === parseInt(req.params.id));
  if(!course){
      res.status(404).send('Data Tidak di temukan')
  }
  res.send(course);
    // res.send(req.params.id);

})

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server running pada port ${port}..`);
})