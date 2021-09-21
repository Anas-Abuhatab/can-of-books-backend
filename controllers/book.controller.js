"use strict";


const {bookModle}=require("../modules/book.Model");


const getBookController =(req,res)=>{
    bookModle.find().then(data=>{
        res.status(200).json(data)
    });
}

module.exports={
    getBookController
}