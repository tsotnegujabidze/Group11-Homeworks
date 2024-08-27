run = True
names = []

age = int(input("Please enter your age: "))

if age >= 18:
    name = input("Please enter your name: ")
    names.append(name)
    print("Your name is:", name)
else:
    run = False