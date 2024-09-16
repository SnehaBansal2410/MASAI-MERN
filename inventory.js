class Item:
    def __init__(self, id, name, quant, price):
        self.id = id
        self.name = name
        self.quant = quant
        self.price = price

    def __repr__(self):
        return f"Item(Id: {self.id}, Name: {self.name}, Quantity: {self.quant}, Price: {self.price})"



def add_item(inventory, item):
    inventory.append(item)


def update_item(inventory, id, new_details):
    item_index = next((index for (index, item) in enumerate(inventory) if item.id == id), None)
    if item_index is not None:
        for key, value in new_details.items():
            setattr(inventory[item_index], key, value)
    else:
        print(f"Item with id {id} not found")


def delete_item(inventory, id):
    item_index = next((index for (index, item) in enumerate(inventory) if item.id == id), None)
    if item_index is not None:
        inventory.pop(item_index)
    else:
        print(f"Item with id {id} not found")


def get_item(inventory, id):
    item = next((item for item in inventory if item.id == id), None)
    if item:
        return item
    else:
        print(f"Item with id {id} not found")
        return None


def print_inventory(inventory):
    for element in inventory:
        print(f"""
        Id: {element.id},
        Name: {element.name},
        Quantity: {element.quant},
        Price: {element.price}
        """)



inventory = []


add_item(inventory, Item(1, 'Apple', 50, 0.5))
add_item(inventory, Item(2, 'Banana', 30, 0.3))
add_item(inventory, Item(3, 'Orange', 20, 0.7))

print("Main Inventory:")
print_inventory(inventory)

update_item(inventory, 2, {'name': 'Green Banana', 'quant': 25})

print("Inventory after update:")
print_inventory(inventory)


item = get_item(inventory, 3)
print('Retrieved Item:', item)


delete_item(inventory, 1)

print("After deletion:")
print_inventory(inventory)
