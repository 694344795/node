var hycheer = require('cheerio');
var hungry = require('./hungry');
var url = 'http://www.qfedu.com/?pinzhuan=biaoti';

hungry.hungry(url, function(data) {
	if(data) {
		var $ = hycheer.load(data);
		console.log($);
		$('a').each(function(index, val) {
			console.log($(val).attr('href'));
		})
	} else {
		console.log('error');
	}
});