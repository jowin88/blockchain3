// Store the transactions that
// this node has in a list
exports.transaction = function(this_nodes_transactions, new_txion)
{
	// On each new POST request,
	// we extract the transaction data
	// Then we add the transaction to our list
	this_nodes_transactions.push(new_txion);
	// Because the transaction was successfully
	// submitted, we log it to our console
	//console.log("\nNew transaction");
	//console.log("\nFROM: "+new_txion.from);
	//console.log("\nTO: "+new_txion.to);
	//console.log("\nAMOUNT: "+new_txion.amount);
	// Then we let the client know it worked out
	txt = "Transaction submission successful\n";
	console.log(this_nodes_transactions);
	return this_nodes_transactions;
};