# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.common.action_chains import ActionChains
import unittest, time, re


class TestSignup(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000/user/signup"
        self.verificationErrors = []
        self.accept_next_alert = True
  

    def test_signUp(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("97183538@qq.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("example")
        element = self.driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained")
        actions = ActionChains(driver)
        actions.move_to_element(element).perform()
        driver.find_element(By.ID, "re_password").send_keys("example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained").click()
        time.sleep(1)
        self.assertEqual(u"http://localhost:3000/user/profile/setup", driver.current_url)


    def test_signupInsignup(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        self.driver.find_element(By.CSS_SELECTOR, ".MuiButtonBase-root:nth-child(2) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signup", driver.current_url)


    def test_signIn(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, ".MuiButtonGroup-grouped:nth-child(1) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/user/signin", driver.current_url)


    def test_logIn(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        self.driver.find_element(By.LINK_TEXT, "Click here to sign in").click()
        self.assertEqual(u"http://localhost:3000/user/signin", driver.current_url)


    def test_goLanding(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.CSS_SELECTOR, "path").click()
        self.assertEqual(u"http://localhost:3000/", driver.current_url)

        
    def teardown(self):
       self.driver.quit()
       self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()