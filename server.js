"use strict";

const express =require("express");
const app = express();
const cors =require("cors");
const axios=require("axios");
require("dotenv").config();
app.use(cors());
const PORT =process.env.PORT;
const MONGO_SERVER=process.env.MONGO_SERVER;
const mongoose = require("mongoose");
// const getUserBook =require("./collections/getUser")

mongoose.connect(`${MONGO_SERVER}/BookStore`,{useNewUrlParser: true, useUnifiedTopology: true});


const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
});

const bookModel = mongoose.model('bookModel', bookSchema);

const userSchema = new mongoose.Schema({
    email :String,
    book:[bookSchema]
   
});
const userModel = mongoose.model('userModel', userSchema);

let seedCollection=()=>{
    const anas = new userModel({
        email:'anasm.abuhatab@gmail.com',
        book:[
            {
                name:'Animal Forest',
                description :'by johan (2010)',
                status:'good book'

            },
            {
            name:'Alwah',
            description :'by Ahmad (2015)',
            status:'good book'

            },
            {
            name:'Relax',
            description :'by mohammad (2020)',
            status:'good book'
            }
        ]
    });
    const dina =new userModel({
        email : 'dina@yahoo.com',
        book:[
            {
            name:'Dont worry',
            description :'by johan (2010)',
            status:'good book'

            },
            {
            name:'Science',
            description :'by Ahmad (2015)',
            status:'good book'

            },
            {
            name:'life',
            description :'by mohammad (2020)',
            status:'good book'
            }
        ]
    });
    anas.save();
    dina.save();
}
seedCollection();



let  getUserBook =  (req,res)=>{
    userModel.find({}).then (data=>{
        res.json(data)
    });
}




app.get('/',(req,res)=>{
    res.status(200).send('iam working')
})

app.get('/books',getUserBook);



app.listen(PORT, () => {console.log(`Listening to PORT ${PORT}`)})

