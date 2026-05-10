#collect three input
# find the average
# and create where each of them will fall into and print out it result

number = int(input("enter a number: "))
numberone = int(input("enter a number: "))
numbertwo = int(input("enter a number: "))

calculation = (number + numberone + numbertwo) / 3

if (calculation >= 90 and calculation <= 100):
    print("A")
elif (calculation >= 80 and calculation < 90):
    print("B")
elif (calculation >= 70 and calculation < 80):
    print("C")
elif (calculation >= 60 and calculation < 70):
    print("D")
else :
    print("F")
