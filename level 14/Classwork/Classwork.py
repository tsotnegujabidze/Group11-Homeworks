#დავალება N1
i = 0
while i < 10:
    print("Tsotne")
    i += 1

#დავალება N2
import random

number = random.randint(1, 10)
guess = None

while guess != number:
    guess = int(input("guess a number from 1 to 10: "))
     
    if guess == number:
        print("congratulations, you guessed the number right")
        break
    elif guess > number:
        print("The number is lower!")
        
    elif guess < number:
        print("The number is higher!") 