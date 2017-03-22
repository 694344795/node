var http = require('http');

function hungry(url, callback) {
	http.get(url, function(res) {
		var data = '';
		res.on('data', function(str) {
			data += str;
		});
		res.on('end', function() {
			callback(data);
		})
	}).on('error', function() {
		callback(null);
	})
};
exports.hungry = hungry;