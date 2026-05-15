function company(employee){

const {name, salary} = employee

return {name, salary}
}
 
employee ={
name: "dapo",
role: "engineer",
salary: 50000,
department: "tech"
}



console.log(company(employee))
