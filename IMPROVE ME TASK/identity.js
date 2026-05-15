function identity(user){
const{name, age} = user
return {name, age}
}
const user = {name: "Amaka",age: 25,country: "Nigeria"}; 
console.log(identity(user))
