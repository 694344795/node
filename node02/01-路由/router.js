var route = {
    '/': "/",
    'favicon': '/favicon.ico',
    'user': '/user',
    'login': '/user/login',
    'biz': '/biz'
};

function router(pathname) {
	if(pathname == '/favicon.ico'){ 
		return; 
	}
  	console.log("About to route a request for " + pathname);
}

exports.router = router;