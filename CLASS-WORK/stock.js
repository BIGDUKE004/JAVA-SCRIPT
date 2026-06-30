const product ={
    price: 1200,
    inStock: true
}

if(product.inStock == false){
console.log("out of stock")
} else if(product.price > 1000){
console.log("expensive")
} else{
console.log("affordable")
}
