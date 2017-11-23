var mongoose=require("mongoose");
var Schema =mongoose.Schema;
var CollectionSchema=new Schema({
    username: String,
    title: String,
    desc: String,
    images: String[100]
});
module.exports=mongoose.model("Collection",CollectionSchema);