function grade(num){

if (num >= 70){
return "A"
} else if(num >= 60 && num <= 69){
return "B"
} else if (num >= 50 && num <= 59){
return "C"
}else if (num >= 40 && num <= 49){
return "D"
} else {
return "F"
}

}

console.log(grade(76))
