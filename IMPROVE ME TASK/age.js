function person(age){
if(age < 10){
return "child";
}  else if(age <= 18){
return "teenager";
} else {
return "adult";
}
}

console.log(person(45));
