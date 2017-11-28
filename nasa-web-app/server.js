var express =require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/collections");
var Collection=require("./src/app/collectionModel");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port=8081;

var router=express.Router();

router.use(function(req,res,next){
    console.log("Something is happening");
    next();
});
router.get("/",function(req,res){
    res.json({message:"hooray! Welcome to our api!"});
});


router.route("/collections")
.post(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var collection= new Collection();
    collection.username=req.body.username;
    collection.title=req.body.title;
    collection.desc=req.body.desc;
    collection.isPublic=req.body.isPublic;
    collection.imageList=req.body.imageList;
   
    collection.save(function(err){
        if(err){
            res.send(err);}
        
        res.json({message: "Collection created!"});
    });
})

.get(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    Collection.find({'isPublic':true}, function(err, collections) {
            if (err){
                res.send(err);}

            res.json(collections);
        });
});
router.route("/collections/:username")
.get(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    Collection.find({username:req.params.username}, function(err,collections){
        if(err){
            res.send(err);}
                res.json(collections);
            
    });
    
});
router.route("/collections/:collection_id")
  .get(function(req, res) {
        Collection.findById(req.params.collection_id, function(err, collection) {
            if (err){
                res.send(err);}
            res.json(collection);
        });
    })
    .put(function(req,res){
        Collection.findById(req.params.collection_id, function(err, collection) {
            if(err){res.send(err);}
            collection.title=req.body.title;
            collection.desc=req.body.desc;
            collection.isPublic=req.body.isPublic;
            collection.save(function(err) {
                if (err){res.send(err);}

                res.json({ message: 'Collection updated!' });
            });
    });
    })
    .delete(function(req,res){
        Collection.remove({
            _id:req.params.collection_id
        },function(err,collection){
          if(err){res.send(err);}
          res.json({message: "Successfully deleted"});
        });
    });
app.use("/api",router);
app.listen(port);
console.log("Magic happens on port "+port);