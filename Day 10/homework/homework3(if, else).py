# 0
temperature = int(input("Enter the temperature: "))

if temperature >= 30:
    print("It's hot ")
else:
    print("It's good temperature")

# 1
username = "user123"
password = "password123"

input_username = input("Enter your username: ")
input_password = input("Enter your password: ")

if input_username == username and input_password == password:
    print("Authentication successful.")
else:
    print("Authentication failed.")

# 2
number = int(input("enter number"))

if number % 2 == 0:
    print("Even")
else:
    print("Odd")

# 3

age = int(input("enter your age: "))

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# 4
product = str(input("what product do you want?: "))

available_products = ["Apple", "Banana", "Orange"]

if product in available_products:
    print("Product is available.")
else:
    print("Product is not available.")

# 5
score = int(input("how many score did you get?: "))

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# 6
number = int(input("enter number: "))

if number > 0:
    print("Positive number")
elif number == 0:
    print("Zero")
else:
    print("Negative number")

# 7
user_role = str(input("what is your role?: "))

if user_role == "admin":
    print("You have access to all features.")
elif user_role == "editor":
    print("You have limited access.")
else:
    print("You have guest access.")

# 8
weather = str(input("what's the weather like?: "))

if weather == "sunny":
    print("You might want to wear sunscreen.")
elif weather == "rainy":
    print("Don't forget your umbrella!")
else:
    print("Weather conditions are uncertain.")

# 9
language = str(input("enter lenguage: "))

if language == "Spanish":
    print("Hola!")
elif language == "French":
    print("Bonjour!")
elif language == "German":
    print("Guten Tag!")
elif language == "Georgia":
    print("გამარჯობა!")
elif language == "America":
    print("Hello!")
else:
    print("Language not recognized.")

# 10
filename = str(input("enter your file name: "))

if filename.endswith(".txt"):
    print("Text file")
elif filename.endswith(".jpg") or filename.endswith(".png"):
    print("Image file")
if filename.endswith(".exe"):
    print("this is executable file or this file may contain a virus")
else:
    print("Unknown file type")
