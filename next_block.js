block = require('./block').block;
exports.next_block = function(last_block)
{
	this.index = last_block.index + 1;
	this.timestamp = Date();
	this.data = "Hey! I'm block " + String(this.index);
	this.hash = last_block.hash;
	the_block = new block(this.index, this.timestamp, this.data, this.hash);
	return the_block;
};