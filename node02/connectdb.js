var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('mytable', server);

db.open(function(err,db){
    if(!err){
        console.log('connect db');
        db.createCollection('mycoll', function(err, collection){
            if(err){
                console.log(err);
            }else{
                //新增数据
					var tmp;
                   function tmpquery(query){
                   		 tmp = query;
                   };
                   collection.insert(tmp,{safe:true},function(err, result){
                       console.log(result);
                   }); 

            }
            db.close();

        });
    }else{
        console.log(err);
    }
	})
