function Food(){
	this.name = '水煮鱼';
	this.remark = '非常有名的一道菜';
}

Food.prototype.getName = function(){
	return this.name;
}

Food.prototype.setName = function(_name){
	this.name = _name;
}

module.exports = Food;