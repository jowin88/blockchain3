// source : https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b
create_genesis_block = require("./create_genesis_block").create_genesis_block;
next_block = require("./next_block").next_block;

// Create the blockchain and add the genesis block
blockchain = [create_genesis_block];
previous_block = blockchain[0];

// How many blocks should we add to the chain
// after the genesis block
num_of_blocks_to_add = 20

// Add blocks to the chain
for(i = 0;i<num_of_blocks_to_add;i++)
{
	block_to_add = next_block(previous_block);
	blockchain.push(block_to_add);
	previous_block = block_to_add;
	// Tell everyone about it!
	console.log("Block " + block_to_add.index + " has been added to the blockchain!");
	console.log("Hash: " + block_to_add.hash + "\n");
 }