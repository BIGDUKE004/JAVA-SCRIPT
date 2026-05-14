function vehicle(car){
if (car.available == true){
return "This car is available"
} else {
return "This car is not available"
}

}

const car = {brand: "Toyota",model: "Camry",available: false}; 

console.log(vehicle(car))
