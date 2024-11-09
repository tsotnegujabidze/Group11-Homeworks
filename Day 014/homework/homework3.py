user_input = int(input("Enter the first number: "))
user_input2 = int(input("Enter the second number: "))

start = min(user_input, user_input2)
end = max(user_input, user_input2)

for i in range(start, end + 1):
    if i % 5 == 0:
        print(i)