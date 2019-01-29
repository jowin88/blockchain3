block = require('./block').block;
block = new block(0, Date(), {"proof-of=work":9, "transactions": []}, "0");
exports.create_genesis_block = block;