authorized = False 
password = "saba123"

while  authorized != True:
    user_input = input("please enter your password: ")
    if user_input == password:
        print("Accses Granted")
        authorized = True