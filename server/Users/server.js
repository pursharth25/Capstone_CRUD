const express = require('express');
const app = express();

const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(helmet());
app.use(cors());

app.use('/core',require('./routes/index'));

app.get ('/',(req,res)=>{
    res.send('welcome to CRUD');
})

app.listen(3000,(e)=>{
    console.log('server started');
    mongoose.connect('mongodb://localhost/myusers').then((res)=>{
        console.log('database connected');
    }).catch((e)=>{
        console.log('error connecting db');
        console.log(e);
    })
});