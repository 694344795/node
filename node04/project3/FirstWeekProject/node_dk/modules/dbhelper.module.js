//连接数据库
//打开数据库
//连接集合
//插入数据
//读取数据
//删除数据
//关闭连接
//更新数据
//public
//private
//protected

var mongod = require('mongodb');
var server = new mongod.Server('127.0.0.1', 27017);
var db = mongod.Db('test', server);

module.exports = {
	insert: function(_data){
		db.open(function(err, db){
			//操作数据库中的集合 cAccounts，
			db.collection('cAccounts', function(err, collection){
				collection.insert(_data);
			});
			db.close();
		})
	},
	get: function(_data, _callback){//_data: function(){}, {}, null
		var _arg1 = !_data || ( _data && typeof _data == 'function') ? {} : _data;
		db.open(function(err, db){
			//操作数据库中的集合 cAccounts，
			db.collection('cAccounts', function(err, collection){
				collection.find(_arg1).toArray(function(_err, _ds){
					if(typeof _data == 'function'){
						_data(_ds);
					} else if(typeof _callback == 'function') {
						_callback(_ds);
					}
				});
			});
			db.close();
		})		
	},
	update: function(a){
		db.open(function(err, db){
			//操作数据库中的集合 cAccounts，
			db.collection('cAccounts', function(err, collection){
				console.log(err);
				collection.insert(request.body);
			});
			db.close();
		})		
	},
	delete: function(a){
		db.open(function(err, db){
			//操作数据库中的集合 cAccounts，
			db.collection('cAccounts', function(err, collection){
				console.log(err);
				collection.insert(request.body);
			});
			db.close();
		})		
	}
}