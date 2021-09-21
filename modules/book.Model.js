"use strict";

const Mongoose  = require("mongoose");



const bookSchema = new Mongoose.Schema({

    title:String,
    description:String,
    status:String,
    email:String
    
});

const bookModle = Mongoose.model('newBook',bookSchema);

// const seedBook=()=>{
//     let book1=new bookModle({
//         title:"JS",
//         description:"lorm",
//         status:"avalibale",
//         email:"dinaa@gmail.com"
//     });

//     let book2=new bookModle({
//         title:"Paython",
//         description:"lorm",
//         status:"not-avalibale",
//         email:"anass@gmail.com"
//     });


//     let book3=new bookModle({
//         title:"Java",
//         description:"lorm",
//         status:"not-avalibale",
//         email:"test@gmail.com"
//     })

//     book1.save();
//     book2.save();
//     book3.save();

//     return {book1,book2,book3}

// };

module.exports = {bookModle}



