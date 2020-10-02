from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.common.action_chains import ActionChains
import unittest, time, re


class TestProfile(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000/user/signin"
        self.verificationErrors = []
        self.accept_next_alert = True
  
    def test_profileEdit(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("simplesignin@gmail.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("Example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        time.sleep(1)
        self.driver.get("http://localhost:3000/user/profile")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-label").click()
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-containedPrimary > .MuiButton-label").click()
        time.sleep(1)
        assert driver.switch_to.alert.text == "Updated"

    def teardown(self):
       self.driver.quit()
       self.assertEqual([], self.verificationErrors) 

if __name__ == "__main__":
    unittest.main()