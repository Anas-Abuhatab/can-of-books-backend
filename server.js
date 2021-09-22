"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER;
const mongoose = require("mongoose");
const { getBookController,
        createBookController,
        deleteBookController, 
        updateBookController} = require("./controllers/book.controller");
// const { bookModle } = require("./modules/book.Model");
app.use(express.json());
mongoose.connect(`${MONGO_SERVER}`, { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

    

app.get('/', (req, res) => {
    res.status(200).send('iam working')
})
// app.get("/seedData",(req,res)=>{
// res.json(seedBook())
// });



app.get('/seedData', getBookController);
app.post('/books', createBookController);
app.delete('/books/:id', deleteBookController);
app.put('/book/:id',updateBookController);


app.listen(PORT, () => { console.log(`Listening to PORT ${PORT}`) });

