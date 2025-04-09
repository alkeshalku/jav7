var mongoose = require ("mongoose");
const productSchema=mongoose.Schema({
    pName : String,
    pQuanity : Number,
    pPrice : Number,
    pBrand : String
})
const productmodel=mongoose.model("product",productSchema)
module.exports=productmodel;