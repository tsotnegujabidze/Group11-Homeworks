def find_last_even(numbers_list):
    for i in range(len(numbers_list) - 1, -1, -1):
        if numbers_list[i] % 2 == 0:
            return numbers_list[i]

print(find_last_even([1,2,3,4,5]))