# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re


class TestSignIn(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000/user/signin"
        self.verificationErrors = []
        self.accept_next_alert = True


    def test_signIn(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("simplesignin@gmail.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("Example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        time.sleep(1)
        self.assertEqual("http://localhost:3000/user/home", driver.current_url)

    def test_signUp(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButtonBase-root:nth-child(2) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signup", driver.current_url)


    def test_signinInsignin(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButtonGroup-grouped:nth-child(1) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signin", driver.current_url)


    def test_createAccount(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.LINK_TEXT, "Click here to create an account").click()
        self.assertEqual(u"http://localhost:3000/user/signup", driver.current_url)

    
    def test_goLanding(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-label > .MuiTypography-root").click()
        self.assertEqual(u"http://localhost:3000/", driver.current_url)

    def teardown(self):
        self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
