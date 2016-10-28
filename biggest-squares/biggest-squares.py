import math


def answer(area):
    ret=[]
    while area != 0:
        rt = math.sqrt(area)
        rt = math.floor(rt)
        area -= (rt*rt)
        ret.append(rt*rt)
    
    return ret


print("expected", [15129, 169, 25, 1])
print("actual", answer(15324))
print("expected", [25, 4, 1])
print("actual", answer(30))
print("expected", [36])
print("actual", answer(36))