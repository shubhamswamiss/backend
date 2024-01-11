require('dotenv').config()
const express = require('express');
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/login',(req,res)=>{
    res.send('Login Page')
})

app.listen(process.env.PORT, ()=>{
   console.log(`App Listening on port ${process.env.PORT}`); 
})