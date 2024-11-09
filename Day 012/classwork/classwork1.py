start = int(input("Pleace enter first number: "))
end = int(input("Pleace enter second number: "))

sum_of_numbers = 0

for number in range(start, end + 1):
    sum_of_numbers += number
    print(number)

print("Sum of numbers:", sum_of_numbers)
