var mongoose=require("mongoose");
var Schema =mongoose.Schema;
var DMCASchema=new Schema({
   title:String,
   text:String
});
module.exports=mongoose.model("Policy",DMCASchema);