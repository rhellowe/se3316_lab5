var mongoose=require("mongoose");
var Schema =mongoose.Schema;
var CollectionSchema=new Schema({
    username:String,
    name: String,
    description: String,
    public: Boolean
    
});
module.exports=mongoose.model("Collection",CollectionSchema);