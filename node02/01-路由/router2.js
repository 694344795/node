var route = {
	'/':'/',
	'favicon':'/favicon.ico',
	'user':'/user',
	'login':'/user/login',
	'biz':'/biz'
};
function router(router){
	if (pathname == 'favicon.ico') {
		return;
	}
	console.log("hello"+pathname);
}
exports.router = router;