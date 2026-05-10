from unittest import TestCase
import palindrome_primenumber_validator

class TestPalindromePrimenumberValidator(TestCase):

    def test_that_validtor_function_exist(self):
        palindrome_primenumber_validator.validator(131) 
        
    def test_that_validtor_function_exist(self):
        result = palindrome_primenumber_validator.validator(131) 
        self.assertTrue(result)

    def test_that_my_false_validation_works(self):
        result = palindrome_primenumber_validator.validator(453) 
        self.assertFalse(result)
