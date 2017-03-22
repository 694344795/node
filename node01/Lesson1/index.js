var cheerio = require('cheerio');
var baidu = require('./baidu');

var url = 'http://www.ihomec.com/brands-category/lookbook-zh-hans';

baidu.baidu(url, function(data){
	if(data){
		var $ = cheerio.load(data);
		$('a').each(function(index, val){
			console.log($(val).attr('href'));
			console.log(11111111111111111111111111111111111111111111);
			console.log($(val));
		})
	} else {
		console.log('error');
	}
})