from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.common.action_chains import ActionChains
import unittest, time, re


class TestHome(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000/user/home"
        self.verificationErrors = []
        self.accept_next_alert = True
  


    def test_logIn(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        self.assertEqual(u"http://localhost:3000/user/signin", driver.current_url)


    def teardown(self):
       self.driver.quit()
       self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()