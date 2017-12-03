var mongoose=require("mongoose");
var Schema =mongoose.Schema;
var CollectionSchema=new Schema({
    username: String,
    title: String,
    desc: String,
    isPublic: Boolean,
    ratingList: [Number],
    overallRating: Number,
    usersRated:[String],
    imageList: [String]
});
module.exports=mongoose.model("Collection",CollectionSchema);