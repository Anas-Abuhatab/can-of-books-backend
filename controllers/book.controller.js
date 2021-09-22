"use strict";


const { bookModle } = require("../modules/book.Model");


const getBookController = (req, res) => {
    bookModle.find().then(data => {
        res.status(200).json(data)
    });
}

const createBookController = (req, res) => {

    let dataBook = req.body;
    let newBook = new bookModle(dataBook)
   
    newBook.save()
    bookModle.find().then(data => {
        res.status(200).json(data)
    });
    
    
}

const deleteBookController = (req, res) => {
    let bookID = req.params.id;
    bookModle.findByIdAndDelete({bookID}).then(() => {
    bookModle.find().then(data => res.json(data))
    })

}

const updateBookController = async(req,res)=>{
    let bookID = req.params.id;
    let updatedBook = req.body;
    bookModle.findOne({_id:bookID}).then(data =>{
        data.title=updatedBook.title;
        data.description=updatedBook.description;
        data.email=updatedBook.email;
        data.status=updatedBook.status;
        data.save();
    });
       let booklist =await bookModle.find({});
       res.status(200).send(booklist)
    
    
};

module.exports = {
    getBookController,
    createBookController,
    deleteBookController,
    updateBookController
}