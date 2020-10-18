const express=require('express');
const app=express();
// pasang joi untuk validasi inputan
var Joi = require('joi');



// ini dipakai untuk menggunakan data json untuk pada saat post
app.use(express.json())
const courses=[
    { id:1,name:'abdul'},
    {id:2,name:'rodi'},
    {id:3,name:'malik'}
]
app.get('/',(req,res)=>{
   res.send('hello word aja bro!')
})

//mengambil semua data courses
app.get('/api/courses',(req,res)=>{
    res.send(courses);
})
// mengamil satu data berdasarkan nilai id nya
app.get('/api/courses/:id',(req,res)=>{
   courses.find(c=>c.id === parseInt(req.params.id));
   if(!course){
       res.status(404).send('Data tidak ditemukan ')
   }
   res.send(course);
})

// Membuat data baru dengan method post
app.post('/api/courses',(req,res)=>{

    // buatkan aturan dengan nama varival schema
    const schema=Joi.object({
        name: Joi.string().min(3).required()
    });

    // const result=Joi.validate(req.body,schema);
    const result=schema.validate(req.body);
    // console.log(result);
    // mamebuat validasi
    if(result.error){
        // bad request 
        res.status(400).send(result.error.details[0].message)
    }
    const course={
        id:courses.length +1,
        name:req.body.name
    }
    courses.push(course);
  
    res.send(course);


})

// multiple paramter
app.get('/api/posts/:yeart/:month',(req,res)=>{
    res.send(req.query)
})
// create port dan mengaktifkannya
const port=process.env.PORT ||3000;
app.listen(port,()=>
    console.log(`server listen to port ${port}..`))

