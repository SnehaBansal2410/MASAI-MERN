numbers = [1, 2, 3, 4, 5, 6, 7]

def add_numbers(numbers, num):
    numbers.append(num)

def remove_numbers(numbers, num):
    if num in numbers:
        numbers.remove(num)
    else:
        print(f"{num} is not in the list")

def sort_numbers(numbers):
    sorted_numbers = sorted(numbers)
    return sorted_numbers

def calculate_sum(numbers):
    return sum(numbers)

def calculate_average(numbers):
    return calculate_sum(numbers) / len(numbers)

print("Initial array:", numbers)

num = 4
add_numbers(numbers, num)
print("After adding", num, ":", numbers)

remove_numbers(numbers, num)
print("After removing", num, ":", numbers)

print("Sorted array:", sort_numbers(numbers))

print("Sum of numbers:", calculate_sum(numbers))

print("Average of numbers:", calculate_average(numbers))
