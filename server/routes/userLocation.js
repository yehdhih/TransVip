var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");


var db = mongojs("mongodb://yehdhih:Aicha69020@ds119732.mlab.com:19732/taxiapp", ["usersLocation"]);

//upadate driver socket id

router.put("/userLocationSocket/:id", function(req, res, next){
           
           var io = req.app.io;
           if(!req.body){
           res.status(400);
           res.json({
                    "error":"Bad data"
                    });
           
           }else{
           db.usersLocation.update({_id:mongojs.ObjectId(req.params.id)},
                                     {$set: {socketId:req.body.socketId}}, function(err, updateDetails){
                                     if(err){
                                     res.send(err);
                                     
                                     }else{
                                     res.send(updateDetails);
                                     }
                                     });
           }
           });


//get nearby user
router.get("/userLocation", function(req, res, next){
           console.log("In get nearby user 1");
           console.log("coordinates:", [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]);
           db.usersLocation.ensureIndex({"coordinate":"2dsphere"});
           db.usersLocation.find({
                                   "coordinate":{
                                   "$near":{
                                   "$geometry":{
                                   "type":"Point",
                                   "coordinates": [parseFloat(req.query.longitude), parseFloat(req.query.latitude)]
                                   },
                                   "$maxDistance":20000
                                   }
                                   }
                                   }, function(err, location){
                                   if(err){
                                   res.send(err);
                                   
                                   }else{
                                   console.log("Location", location);
                                   res.send(location);
                                   }
                                   });
           
           });
/*
//Get Single User and emit track by user to driver
router.get("/userLocation/:id", function(req, res, next){
           console.log("In get nearby useer 2");
           var io = req.app.io;
           db.usersLocation.findOne({userId: req.params.id},function(err, location){
                                      if (err){
                                      res.send(err);
                                      }
                                      res.send(location);
                                      console.log("User location: ", location);
                                      io.emit("trackDriver", location);
                                      });
           });

//Update Location by driver to user
router.put("/driverLocation/:id", function(req, res, next){
           var io = req.app.io;
           var location = req.body;
           var latitude = parseFloat(location.latitude);
           var longitude = parseFloat(location.longitude);
           if (!location){
           res.status(400);
           res.json({
                    "error":"Bad Data"
                    });
           } else {
           db.driversLocation.update({_id: mongojs.ObjectId(req.params.id)},{ $set: {
                                     socketId:location.socketId,
                                     coordinate:{
                                     "type": "Point",
                                     coordinates:[
                                                  longitude,
                                                  latitude
                                                  ]
                                     }
                                     }}, function(err, updateDetails){
                                     if (err){
                                     console.log(updateDetails);
                                     res.send(err);
                                     }
                                     if (updateDetails){
                                     
                                     //Get updated location
                                     db.driversLocation.findOne({_id:  mongojs.ObjectId(req.params.id)},function(error, updatedLocation){
                                                                if (error){
                                                                res.send(error);
                                                                }
                                                                res.send(updatedLocation);
                                                                io.emit("action", {
                                                                        type:"UPDATE_DRIVER_LOCATION",
                                                                        payload:updatedLocation
                                                                        });
                                                                });
                                     }
                                     });
           }
           });

module.exports = router;

*/
//var db = mongojs("mongodb://eman:eman@ds163181.mlab.com:63181/taxiapp", ["driversLocation"]);

