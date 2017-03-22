var mysql = require('mysql');
var sqlconnect = mysql.createConnection({
	host:'localhost',
	user:'root',
	password: '',
    database:'item'
});
sqlconnect.connect();
sqlconnect.query('select * from img', function(err, rows, fields) {
    if (err) throw err;
    console.log('查询结果为: ', rows);
});
sqlconnect.end();