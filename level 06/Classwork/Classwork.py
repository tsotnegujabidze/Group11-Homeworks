#დავალება N1
user_name = input("What's your name?> ")
print(f"Your name is {user_name}.")

#დავალება N2
number1 = float(input("What is the first number?> "))
number2 = float(input("What is the second number?> "))
print(f"Those two numbers added is equal to {number1 + number2}.")
print(f"Those two numbers substracted is equal to {number1 - number2}.")
print(f"Those two numbers multiplied is equal to {number1 * number2}.")
print(f"Those two numbers devided is equal to {number1 / number2}.")

#დავალება N3
first_name = input("Enter your first name> ")
last_name = input("Enter your last name> ")
age = input("Enter your age> ")

print(f"Your name is {first_name}. Your lastname is {last_name}. Your age is {age}.")

print("Your name is {}. Your lastname is {}. Your age is {}.".format(first_name, last_name, age))
