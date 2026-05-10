# start by checking if the number is a palindrome how? a palindrome is a number that when reversed will be the same as the normal state
# now the next is prime number? prime number are numbers that can be divided by 1 and it self

# to get a palindrome:
# create a variable to store the value
# use a loop to iterate over the calculation
# divide the number by modulous ten to get the last digit
# when done compare the final value with the initial value

# to get a prime number:
# divide the value by the values behind it e.g 15 - divide it by 2 to 14, if it is not divided by any of them then it is a prime number but if divided by any of them then it is not a prime number

# step 1 : create a block of code to check the palindrome 
# step 2 : create a block of code to find the prime number
# return true if the number is a palindrome and a prime number
# return false if not
        
def validator(digit):
    for number in range(digit):
        value = digit % 10
        digit = digit / digit
        if value == digit:
            return True 
        else:
            return False
    for number in range (2, digit):
        if digit % number != 0:
            return True
        else: 
            return False
