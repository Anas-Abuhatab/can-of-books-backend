"use strict";

const { userModel } = require("../modules/user");


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

module.exports ={seedCollection};