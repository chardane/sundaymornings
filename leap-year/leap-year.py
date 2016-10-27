
import datetime

# Start at next year
year = datetime.datetime.now().year + 1
leap_years = []

print("The next 10 leap years are: ")
while len(leap_years) != 10:
    if year % 4 == 0:
        leap_years.append(year)
    elif year % 100 == 0 and year % 400 == 0:
        leap_years.append(year)
    year += 1

# Print the years, and done
print(' '.join(map(str,leap_years)))
