var express =require("express");
  

var productRouter = express();

productRouter.get("/",(request,response)=>{
    response.send("inside productjs");

})

productRouter.get("/",(request,response)=>{
    response.send("inside productlkjjs");
})
module.exports= productRouter;