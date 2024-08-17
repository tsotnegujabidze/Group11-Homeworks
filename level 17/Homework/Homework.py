#დავალება N1
def calculate_sum(numbers):
    total = 0
    for i in numbers:
        total += i
    return total

numbers_list = [1, 2, 3, 4, 5]
print(calculate_sum(numbers_list))

#დავალება N2
def filter_strings(input_list):
    return [string for string in input_list if len(string) > 5]

strings_list = ["apple", "banana", "orange", "pineapple", "kiwi", "watermelon"]
filtered_list = filter_strings(strings_list)
print("strings with length more than 5:", filtered_list)

#დავალება N3
def filter_even_numbers(inputlist):
    return [num for num in inputlist if num % 2 == 0]

numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered_list = filter_even_numbers(numbers_list)
print(filtered_list)

#დავალება N4
def largestnum(inputlist):
    return max(inputlist)

num = [5, 6, 7, 8]

print(largestnum(num))

#დავალება N5
def a(input_list):
    return [string for string in input_list if string.startswith('a')]

strings_list = ["luka", "application", "team", "amsterdam", "awoken", "crystal"]
filtered_list = a(strings_list)
print("strings starting with a:", filtered_list)

#დავალება N6
def squared(x):
    return [num ** 2 for num in x]

numbers = [1, 2, 3, 4, 5]
print(squared(numbers))

#დავალება N7
def lengths(list):
    return [len(string) for string in list]

stringslist = ["amsterdam", "bone", "opened", "knock", "win"]
print(lengths(stringslist))