# 0
num = 1
while num <= 10:
    print(num)
    num += 1

# 1
sum = 0
i = 1
while i <= 100:
    sum += i
    i += 1
print("Sum(ჯამი):", sum)

# 2
i = 1
while i <= 10:
    if i % 2 == 0:
        print(i)
    i += 1

# 3
count = 10
while count >= 1:
    print(count)
    count -= 1

# 4
user_password = input("Enter password to exit: ")
while user_password != '123':
    print("You entered: ", user_password)
    user_password = input("Enter password to exit: ")
print("Goodbye!")

# 5
message = "Hello word"
repeat = 1
while repeat < 6:
    print(message)
    repeat += 1

# 6
number = 2
while number <= 30:
    print(number)
    number += 2

# 7
print(range(4), "saba")

# 8
import time

seconds = int(input("Enter a number to start the timer: "))
while seconds > 0:
    print(seconds)
    time.sleep(1)  # Pause for 1 second
    seconds -= 1
print("Time's up!")

# 9
number = int(input("Enter a number: "))
sum_of_digits = 0
while number > 0:
    digit = number % 10
    sum_of_digits += digit
    number //= 10
print("Sum of digits:", sum_of_digits)

# 10
number = 36
guess = int(input("guess the number: "))
while guess != number:
    guess = int(input("guess the number: "))
print("Congratulations, you won")