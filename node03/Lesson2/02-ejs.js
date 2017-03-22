var ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<h1><%= people.join(", "); %></h1>', {people: people});

    console.log(html);

var app = require('express')();

app.get('/people', function(req, res){
	res.send(html);
});

app.listen(888);
