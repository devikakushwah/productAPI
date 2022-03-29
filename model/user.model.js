const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:String
    ,password:String
});
module.exports = mongoose.model("users",userSchema);