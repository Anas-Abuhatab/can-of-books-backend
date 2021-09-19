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
const getUserBook =require("./collections/getUser")

mongoose.connect(`${MONGO_SERVER}/BookStore`,{useNewUrlParser: true, useUnifiedTopology: true});


app.get('/',(req,res)=>{
    res.status(200).send('iam working')
})

app.get('/books',getUserBook);


app.listen(PORT, () => {console.log(`Listening to PORT ${PORT}`)})

