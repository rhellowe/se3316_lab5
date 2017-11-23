var mongoose=require("mongoose");
var Schema =mongoose.Schema;
var CollectionSchema=new Schema({
    username: String,
    title: String,
    desc: String,
    isPublic: Boolean,
    imageList: [String]
});
module.exports=mongoose.model("Collection",CollectionSchema);