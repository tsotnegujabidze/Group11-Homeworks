#დავალება N1
def func():
    for i in range(1, 2):
        if i % 4 == 0:
            print(i)

print(func())    

#დავალება N2
for i in range(1,11):
    s = i ** 2
    print(s)

#დავალება N3
number = int(input("enter start num: "))
number2 = int(input("enter end num: "))

def nums():
    for i in range(number, number2+1):
        if i % 2 == 0:
            print(i ** 2)
        else:
            print(i ** 0.5)


print(nums())