#დავალება N1
first_name = input("Enter your firstname> ")
last_name = input("Enter your lastname> ")
age = input("Enter your age> ")
gmail = input("Enter your Gmail address> ")

print(f"Your name is {first_name}. Your surname is {last_name}. You are {age} years old. Your Gmail address is {gmail}.")

#დავალება N2
num1 = float(input("Enter the first number> "))
num2 = float(input("Enter the second number> "))
num3 = float(input("Enter the third number> "))

addition_result = num1 + num2 + num3
print(f"The sum of {num1}, {num2}, and {num3} is: {addition_result}")

subtraction_result = num1 - num2 - num3
print(f"The result of subtracting {num2} and {num3} from {num1} is: {subtraction_result}")

multiplication_result = num1 * num2 * num3
print(f"The multiplying {num1}, {num2}, and {num3} gives us a result: {multiplication_result}")

if num2 != 0 and num3 != 0:
    division_result = num1 / num2 / num3
    print(f"The result of dividing {num1} by {num2} and then by {num3} is: {division_result}")
else:
    print("Division by zero is not allowed.")

#დავალება N3

#Solution N1
price_per_item = 20

quantity_of_items = 4

total_cost = price_per_item * quantity_of_items

print(f"The total cost of all {quantity_of_items} items is ${price_per_item:.2f} times {quantity_of_items:.2f} which is ${total_cost:.2f}.")

#Solution N2
price_per_item = 20

quantity_of_items = 4

print(f"The total cost of all {quantity_of_items} items is ${price_per_item:.2f} times {quantity_of_items:.2f} which is ${price_per_item * quantity_of_items:.2f}.")