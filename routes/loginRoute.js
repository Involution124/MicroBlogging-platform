var express=require("express");
var router = express.Router();
var db = require("../modules/mongo");
var md5 = require("md5");
router.use(express.json());
router.use(express.urlencoded());

router.get("/", function(req, res){
    console.log(req.body);
    console.log("Loaded the loginroute");
    res.render('login'); 
});

router.post("/", function(req, res){
    console.log(req.body);
    if(typeof req.body.username == 'undefined' || typeof req.body.password == 'undefined' || req.body.username == null || req.body.password==null){
        res.render('login', { incomplete:'failed'});
    } else {
        db.connect(function(err){
            if(err){
                console.log("error " + err);
                process.exit(1);
            }
        var users = db.get().collection("users");
        users.find({username:req.body.username, password:md5(req.body.password)}, function(err, data){
            if(typeof data.username !== 'undefined' && !err){
                console.log("Login was successful, with " + data.username);
                res.render('login');
            } else {
                console.log("data.username = " + data.username + " md5 = " + md5(req.body.password));
                console.log("The login failed with " + err);
                res.render('login', {login:'failed'});
            }          
        })

        });

    }
})

module.exports = router;