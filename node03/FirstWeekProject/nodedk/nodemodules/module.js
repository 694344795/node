var app = function(app,express){
	app.use('',function(){
		this.obj = function(){
			
		}
	})
}
app.use(express.static(path.join(__dirname +'/client')));
