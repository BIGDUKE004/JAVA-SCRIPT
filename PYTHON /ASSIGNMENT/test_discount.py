# collect input from your user which is name of item, price and promotional code
# the whole program is to print whether theres a discount or not


from unittest import TestCase
import discount

class test_discount(TestCase):

    def test_for_halfoff_discount(self):
        result = discount.first_Off("rice", 20000, "FIRSTOFF")
        self.assertEqual(result, 10000)

    def test_for_ten_percentoff(self):
        result = discount.price_discount("rice", 20000, "SAVE10")
        self.assertEqual(result, 18000)

    def test_for_no_discount(self):
        result = discount.price_off("rice", 20000, "")
        self.assertEqual(result, 20000)

