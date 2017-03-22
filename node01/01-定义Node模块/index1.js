var module1  = require('./module1');
module1.setName("Tom");
module1.getName(); //Tom

var module2  = require('./module1');
module2.setName("Sam");
module2.getName(); //Sam

module1.getName(); //Sam