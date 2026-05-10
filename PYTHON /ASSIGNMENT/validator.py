#collect an input
# check the length and give out it output

password = input("enter your password: ")

if(len(password) > 10):
    print("strong")

elif(len(password) > 6 and len(password) <= 10):
    print("medium")

elif(len(password) > 1 and len(password) <= 6):
    print("weak")

else:
    print("invalid")
