"use strict";
const mongoose = require("mongoose");
const { bookSchema } = require("./Book");

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




module.exports={userSchema,userModel}