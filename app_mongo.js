var MongoClient = require('mongodb').MongoClient;

//Open the connection to the server
MongoClient.connect('mongodb://localhost:27017/estudiantes', function(err, db){
    if(err) throw err;

    //Find one document in or collection
    db.collection('estudiantes').findOne({}, function(err, doc){
	if(err) throw err;
	
	//print the result
	console.log(doc);
	
	//close the DB
	db.close();	
    });

    //declare success
    console.dir('Called finOne!');
});
