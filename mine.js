var block = require("./block").block;
var proof_of_work = require("./proof_of_work").proof_of_work;
exports.mine = function(blockchain, this_nodes_transactions, miner_address)
{
		// Get the last proof of work
		last_block = blockchain[blockchain.length - 1];
		if(blockchain.length == 1){last_proof = 0;}
		else{last_proof = last_block.data['proof-of-work'];}
		// Find the proof of work for
		// the current block being mined
		// Note: The program will hang here until a new
		//       proof of work is found
		proof = proof_of_work(last_proof);
		// Once we find a valid proof of work,
		// we know we can mine a block so 
		// we reward the miner by adding a transaction
		this_nodes_transactions.push(
			{ "from": "network", "to": miner_address, "amount": 1 }
		);
		// Now we can gather the data needed
		// to create the new block
		new_block_data = {
			"proof-of-work": proof,
			"transactions": this_nodes_transactions
		};
		new_block_index = last_block.index + 1;
		new_block_timestamp = this_timestamp = Date();
		last_block_hash = last_block.hash;
		// Empty transaction list
		this_nodes_transactions = [];
		// Now create the
		// new block!
		mined_block = new block(
			new_block_index,
			new_block_timestamp,
			new_block_data,
			last_block_hash
		);
		blockchain.push(mined_block);
		// Let the client know we mined a block
		return [
			blockchain,
			this_nodes_transactions,
			{
			  "index": new_block_index,
			  "timestamp": new_block_timestamp,
			  "data": new_block_data,
			  "hash": last_block_hash
			}
		];
};