from random import randrange
def random_num(base,ceil):
    """ utility function for shuffler_in_place"""
    return randrange(base,ceil)

def shuffler_in_place(lst):
    """ Shuffles a list in place. """

    counter = 0
    while counter < len(lst):

        new_index = random_num(counter,len(lst))
        shift = lst[counter] 
        lst[counter] = lst[new_index]
        lst[new_index] = shift
        counter += 1
    return lst
cards = ['ace','king','queen']
print(shuffler_in_place(cards))

