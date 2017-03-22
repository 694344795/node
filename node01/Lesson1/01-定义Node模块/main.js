var Food = require('./food.js');
var _food1 = new Food();
_food1.setName('酸菜鱼');
console.log(_food1.getName());

var _food2 = new Food();
_food2.setName('清蒸鱼');
console.log(_food2.getName());

console.log(_food1.getName());

//在命令窗口 node main.js