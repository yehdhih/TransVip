var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
//var db = mongojs("mongodb://eman:eman@ds163181.mlab.com:63181/taxiapp", ["drivers"]);
var db = mongojs("mongodb://yehdhih:Aicha69020@ds119732.mlab.com:19732/taxiapp", ["drivers"]);

//Get Single Driver
router.get("/driver/:id", function(req, res, next){
    db.drivers.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, driver){
        if (err){
            res.send(err);
        }
                       console.log("Found a driver", driver);
        res.send(driver);
    });
});

module.exports = router;
