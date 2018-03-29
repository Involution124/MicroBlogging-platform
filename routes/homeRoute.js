var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    console.log("Loaded the homeroute");
    res.render('index'); 
});
module.exports = router;