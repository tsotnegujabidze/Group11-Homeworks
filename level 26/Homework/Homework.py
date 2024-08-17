def manual_sum(lst):
    sum = 0
    for num in lst:
        sum += num
    return sum

print(manual_sum([1,2,3,4,5,6]))

def manual_max(lst):
    maxvalue = lst[0]
    for num in lst:
        if num > maxvalue:
            maxvalue = num
    return maxvalue

print(manual_max([1,2,3,4]))

def manual_min(lst):
    minvalue = lst[0]
    for num in lst:
        if num < minvalue:
            minvalue = num
    return minvalue   

print(manual_min([1,2,3,4,5]))

def manual_len(lst):
    len = 0
    for length in lst:
        len += 1
    return len

print(manual_len([1,2,3,4,5,13]))

def manual_reduce(originallst):
    copiedlst = []
    for items in originallst:
        copiedlst.append(items)
    return copiedlst

print(manual_reduce([1,2,3,4,5]))