def first_Off(name, price, code):
    if code == "FIRSTOFF":
        discount = (50 / 100) * price
        return price - discount
    return price 

def price_discount(name, price, code):
    if code == "SAVE10":
            discount = (10 / 100) * price
            return price - discount
    return price

def price_off(name, price, code):
    if code != "FIRSTOFF" and code != "SAVE10":
        return price

