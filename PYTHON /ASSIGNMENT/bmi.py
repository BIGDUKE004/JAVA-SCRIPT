#collect input
#calculate the input
#give result based on the calculation


numone = bool(input("enter weight: "))
num = bool(input("enter height: "))

calculation = numone / (num * num)

if(calculation >= 30):
    print("obese")
elif(calculation >= 25 and calculation <= 29.9):
    print("overweight")
elif(calculation >= 18.5 and calculation <= 24.9):
    print("normal")
elif(calculation < 18.5):
    print("underweight")
