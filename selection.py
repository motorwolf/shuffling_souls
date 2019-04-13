
def selection_sort(lst):

    if not lst:
        return lst
    index_of_smallest = 0 
    smallest = lst[0]
    for inx in range(0,len(lst)):
        if lst[inx] <  smallest:
            index_of_smallest = inx
    lst.insert(0, lst.pop(index_of_smallest))
    return lst[:1] + selection_sort(lst[1:])

print(selection_sort([6,3,1,8,0]))
print(selection_sort([3,6,5,5,3,6,0]))
