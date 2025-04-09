var express = require("express")
require("./db")
var userRoutes = require('./routes/userRoute')
var productRoutes = require('./routes/productRoutes')
var app=express();

app.use(express.json())
var port=1000;




app.use('/api',productRoutes)
app.use('/api',userRoutes)
app.listen(port,()=>{
    console.log(`SERVER IS UP AND RUNNING ${port}`)
});