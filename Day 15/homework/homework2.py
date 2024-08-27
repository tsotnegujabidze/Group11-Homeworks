first_letter = "G"
user_input = input("Enter the word: ")

if len(user_input) > 0 and user_input[0] == first_letter:
    print("True")
else:
    print("False")