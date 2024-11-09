authorized = False 
password = "Goa best"

login_attempts = 0  

while authorized != True:
    if login_attempts >= 3:
        print("Maximum login attempts. Try again later.")
        break

    user_input = input("Please enter your password: ")
    if user_input == password:
        authorized = True
        print("Correct")
    else:
        print("Incorrect password. Please try again.")
        login_attempts += 1