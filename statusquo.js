const order = {
     status: "pending" 
}

if(order.status == "pending"){
console.log("processing")
} else if (order.status == "shipped"){
console.log("shipped")
}else if (order.status == "delivered"){
console.log("delivered")
}
