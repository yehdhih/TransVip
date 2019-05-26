var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
//var db = mongojs("mongodb://eman:eman@ds163181.mlab.com:63181/taxiapp", ["drivers"]);
var db = mongojs("mongodb://yehdhih:Aicha69020@ds119732.mlab.com:19732/taxiapp", ["users"]);

//Get Single Driver
router.get("/user/:id", function(req, res, next){
           db.users.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, user){
                              if (err){
                              res.send(err);
                              }
                              console.log("Found a user", user);
                              res.send(user);
                              });
           });

module.exports = router;

