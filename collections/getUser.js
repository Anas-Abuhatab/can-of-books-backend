"use strict";

const { userModel } = require("../modules/user");

const {seedCollection}=require("./seedCollection")

seedCollection();

let getUserBook =(req,res)=>{
    userModel.find({}).then(data=>{
        res.json(data);
    });
}

getUserBook();



module.exports =getUserBook;

