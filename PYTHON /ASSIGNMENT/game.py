# collect input from the user
# give out result based on input
# calculation for the game: (rock win scissor) (paper win rock) (scissors win paper) 



playerone = input("playerone: ")
playertwo = input("playertwo: ")

if(playerone == "rock" and playertwo == "scissors") or (playerone == "paper" and playertwo == "rock") or (playerone == "scissors" and playertwo == "paper"):
    print("playerone wins")
elif(playertwo == "rock" and playerone == "scissors") or (playertwo == "paper" and playerone == "rock") or (playertwo == "scissors" and playerone == "paper"):
    print("playertwo wins")
else: 
    print("tie")
