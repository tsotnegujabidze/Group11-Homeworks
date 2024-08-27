def is_prime(number):
    if number <= 1:
        return False
    
    if number == 2:
        return True
    
    for i in range(2, number):
        if number % i == 0:
            return False
    
    return True

number = int(input("Enter a number to check if it's prime: "))
if is_prime(number):
    print(number, "is a prime number.")
else:
    print(number, "is not a prime number.")