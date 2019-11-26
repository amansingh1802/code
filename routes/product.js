var express =require("express");
  

var productRouter = express();

productRouter.get("/",(request,response)=>{
    response.send("inside productjs");
})
module.exports= productRouter;