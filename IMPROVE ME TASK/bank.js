function bank(account){
if(account.balance < 1000){
return "low balance"
} else {
return "Sufficient Balance"
}
}
 const account = {
accountName: "David", 
balance: 500
}; 

console.log( bank(account))
