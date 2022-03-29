const express = require('express');
const userRouter = require('./route/user.route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://devikakushwah:Radhakrishna%4029@newcluster.7o13k.mongodb.net/product');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user',userRouter);

// const port = process.env.PORT || 8080;
app.listen(3000,()=>{
    console.log("server running...")
});