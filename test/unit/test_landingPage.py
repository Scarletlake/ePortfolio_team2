# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class TestLanding(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000"
        self.verificationErrors = []
        self.accept_next_alert = True


    def test_startNow(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signup", driver.current_url)

    def test_signIn(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButtonGroup-grouped:nth-child(1) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signin", driver.current_url)


    def test_signUp(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButtonBase-root:nth-child(2) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signup", driver.current_url)


    def teardown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)


if __name__ == "__main__":
    unittest.main()