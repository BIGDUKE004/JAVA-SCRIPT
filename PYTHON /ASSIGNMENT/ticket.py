#collect an input 
#then give out a result based on the user input


num = int(input("enter age: "))

if(num < 5):
    print("free")

elif(num >= 5 and num <= 12):
    print("$5")

elif(num >= 13 and num <= 64):
    print("$12")

elif(num > 65):
    print("$8")
