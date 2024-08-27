import time

print("Hey, I'm the black guy in Bensimons")
time.sleep(2)
user_name = input("What's your name?: ")

answer_list = ["1. fight", "2. friend", "3. robbery"]
print("answers: ")
print(answer_list[0])
print(answer_list[1])
print(answer_list[2])
user_input = input("Who are you? (Enter the number): ")

if user_input == "1":
    print("You are dead")
elif user_input == "2":
    print("became friends")
elif user_input == "3":
    print("Your money is mine")
else:
    print("Wrong answer!")