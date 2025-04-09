var mongoose = require ("mongoose");
const userschema=mongoose.Schema({
    email:String,
    password:String,
    role:{type:String,enum:["admin","user"],default:"user"}
})
const usermodel=mongoose.model("user",userschema)
module.exports=usermodel;
