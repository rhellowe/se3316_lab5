var express =require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/collections");
var Collection=require("./src/app/collectionModel");
var Policy=require("./src/app/dmcapolicyModel");

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


//______________________________________________________________________________


router.route("/policies/dmca")
.get(function(req,res){
  
    Policy.find({"title":"dmca"},function(err, policies) {
            if (err){
                res.send(err);}
            res.json(policies);
        });
})
.post(function(req,res){
    
    var policy= new Policy();
    policy.title=req.body.title;
    policy.text=req.body.text;
      policy.save(function(err){
        if(err){
            res.send(err);}
        
        res.json({message: "Policy created!"});
    });
})
.put(function(req,res){
    Policy.find({"title":"dmca"},function(err, policies) {
        if(err){res.send(err);}
        policies[0].text=req.body.text;
        policies[0].save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: "DMCA Policy Updated!"})
        })
        
    });
});


//______________________________________________________________________________


router.route("/policies/privacy")
.get(function(req,res){
    Policy.find({"title":"privacy"},function(err, policies) {
            if (err){
                res.send(err);}
            res.json(policies);
        });
})
.post(function(req,res){
    var policy= new Policy();
    policy.title=req.body.title;
    policy.text=req.body.text;
      policy.save(function(err){
        if(err){
            res.send(err);}
        
        res.json({message: "Privacy Policy created!"});
    });
})
.put(function(req,res){
    Policy.find({"title":"privacy"},function(err, policies) {
        if(err){res.send(err);}
        policies[0].text=req.body.text;
        policies[0].save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message: "Privacy Policy Updated!"})
        })
        
    });
});

//______________________________________________________________________________


//______________________________________________________________________________


router.route("/collections")
.post(function(req,res){
    var collection= new Collection();
    collection.username=req.body.username;
    collection.title=req.body.title;
    collection.desc=req.body.desc;
    collection.isPublic=req.body.isPublic;
    collection.ratingList=req.body.ratingList;
    collection.usersRated=req.body.usersRated;
    collection.overallRating=0;
    for (var i=0;i<collection.ratingList.length;i++){
        collection.overallRating=collection.overallRating+collection.ratingList[i];
    }
    if(collection.ratingList.length>0){
    collection.overallRating=(collection.overallRating)/(collection.ratingList.length);
    }
    collection.imageList=req.body.imageList;
   
    collection.save(function(err){
        if(err){
            res.send(err);}
        
        res.json({message: "Collection created!"});
    });
})

.get(function(req,res){
    res.setHeader("Access-Control-Allow-Origin","*");
    Collection.find({"isPublic":true}, function(err, collections) {
            if (err){
                res.send(err);}

            res.json(collections);
        }).sort({overallRating:-1});
});


//______________________________________________________________________________


router.route("/collections/:username")
.get(function(req,res){
    Collection.find({username:req.params.username}, function(err,collections){
        if(err){
            res.send(err);}
                res.json(collections);
            
    });
    
});


//______________________________________________________________________________


router.route("/collections/rating/:collection_id")
   .put(function(req,res){
        Collection.findById(req.params.collection_id, function(err, collection) {
            if(err){res.send(err);}
            
            if(collection.usersRated.indexOf(req.body.user)==-1){
         collection.ratingList.push(req.body.rating);
         collection.usersRated.push(req.body.user);
            }
            else{
            var index=collection.usersRated.indexOf(req.body.user);
             let temp=[];
             var fLength=collection.ratingList.length-index;
             for(var i=0;i<fLength;i++){
                 temp.push(collection.ratingList.pop());
             }
             temp.pop();
             collection.ratingList.push(req.body.rating);
             for(var j=1;j<fLength;j++){
                 collection.ratingList.push(temp.pop());
             }
            }
            
         
            collection.overallRating=0;
    for (var i=0;i<collection.ratingList.length;i++){
        collection.overallRating=collection.overallRating+collection.ratingList[i];
    }
    if(collection.ratingList.length>0){
    collection.overallRating=(collection.overallRating)/(collection.ratingList.length);
    }
            collection.save(function(err) {
                if (err){res.send(err);}

                res.json({ message: 'Rating updated!',
                location: collection.ratingList[0],
                    location2: collection.ratingList[1],
            
                });
            });
    });
       
       
   });


//______________________________________________________________________________


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
            collection.imageList=req.body.imageList;
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