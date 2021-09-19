"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require("./Book");

const userSchema = new mongoose.Schema({
    email :String,
    book:[bookSchema]
   
});
const userModel = mongoose.model('userModel', userSchema);



module.exports={userSchema,userModel}