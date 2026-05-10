#collect two 
# collect the operator sign
# check what operator sign the user inputted and the do the calculation based on it

number = int(input("enter a number: "))
numberone = int(input("enter a number: "))
operator = input("enter an operator: ")

if(operator == "+"):
    print(number + numberone)
elif(operator == "-"):
    print(number - numberone)
elif(operator == "*"):
    print(number * numberone)
elif(operator == "/"):
    print(number / numberone)
else: 
    print("invalid input")
