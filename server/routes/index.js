var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next){
	res.render("index.html")
}); 

module.exports = router;

/*
 var driverMovement = [{
 lat:3.113667,
 long:101.687565
 },
 {
 lat:3.118748,
 long:101.678467
 
 },
 {
 lat:3.127270,
 long:101.688423
 
 },
 {
 lat:3.137383,
 long:101.695118
 },
 {
 lat:3.137383,
 long:101.695118
 },
 {
 lat:3.152857,
 long:101.703529
 },
 {
 lat:3.146642,
 long:101.695845
 },
 {
 lat:3.1591601,
 long:101.7136599
 }];
*/
