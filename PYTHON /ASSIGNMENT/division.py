#collect two input
# if the second input is not equal to zero the program should divide itseld else give an output it cannot be divided

num = int(input("enter number: "))
numtwo = int(input("enter number: "))

if(numtwo != 0):
    print(num / numtwo)
elif(numtwo == 0):
    print("cannot divide by zero")
