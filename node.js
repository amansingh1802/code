var express =require("express");
var router =require("./routes/product");
var app = express();

app.use("/product",router);
app.listen(9898,()=>{
    console.log("server started");
})

//hey bro 

//hi bro aman 
