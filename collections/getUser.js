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


mongoose.connect(`${MONGO_SERVER}/BookStore`,{useNewUrlParser: true, useUnifiedTopology: true});
const { userModel } = require("../modules/user");



  let  getUserBook =  (req,res)=>{
    userModel.find({}).then (data=>{
        res.json(data).catch((e)=>{
            console.log(e)
        });
    });
}





module.exports ={getUserBook};

