var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var dba = {
    "db":null 
}

exports.connect = function( done){
    if(dba.db===null){
    mongo.connect(url, function(err, client){
        if(err){
            console.log("Error connecting to the database! " + err );
            process.exit(1);
        }
        dba.db = client.db('microblog');;
        done();
    });
    } else {
        return done();
    }
}
exports.get =function(){
    return dba.db;
}
