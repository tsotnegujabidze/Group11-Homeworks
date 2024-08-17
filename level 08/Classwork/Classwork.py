#დავალება N1
user_age = int(input("How old are you?> "))

if user_age <= 17:
    print("Junior discount!")
elif user_age >= 75:
    print("Senior discount!")
else:
    print("Normal price!")
print("How would you like to pay?")

#დავალება N2
number1 = 10
number2 = 5
number3 = 2
number4 = 11
number5 = 15
number6 = 20

print(number1 > number2) #True
print(number2 < number5) #True
print(number6 > number6) #False
print(number1 != number2) #True
print(number4 < number3) #False

#დავალება N3
num1 = int(input("What is the first number?> "))
num2 = int(input("What is the second number?> "))

print(num1 > num2)
print(num1 < num2)
print(num1 == num2)