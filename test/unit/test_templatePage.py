from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
from selenium.webdriver.common.action_chains import ActionChains
import unittest, time, re


class TestTemplate(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.base_url = "http://localhost:3000/user/signin"
        self.verificationErrors = []
        self.accept_next_alert = True
  
    def test_templateSelectBusiness(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("simplesignin@gmail.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("Example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        time.sleep(1)
        self.driver.get("http://localhost:3000/portfolio/template")
        driver.find_element(By.CSS_SELECTOR, ".MuiGrid-root:nth-child(1) .MuiButtonBase-root:nth-child(4) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/portfolio/editor?temp=business&id=0", driver.current_url)
    
    def test_templateSelectMinimal(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("simplesignin@gmail.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("Example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        time.sleep(1)
        self.driver.get("http://localhost:3000/portfolio/template")
        driver.find_element(By.CSS_SELECTOR, ".MuiGrid-root:nth-child(2) > .MuiPaper-root .MuiButtonBase-root:nth-child(4) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/portfolio/editor?temp=minimal&id=0", driver.current_url)

    def test_templateSelectArt(self):
        driver = self.driver
        driver.get(self.base_url + "/")
        driver.find_element(By.ID, "email").click()
        driver.find_element(By.ID, "email").send_keys("simplesignin@gmail.com")
        driver.find_element(By.ID, "password").click()
        driver.find_element(By.ID, "password").send_keys("Example")
        driver.find_element(By.CSS_SELECTOR, ".MuiButton-contained > .MuiButton-label").click()
        time.sleep(1)
        self.driver.get("http://localhost:3000/portfolio/template")
        driver.find_element(By.CSS_SELECTOR, ".MuiGrid-root:nth-child(3) .MuiButtonBase-root:nth-child(4) > .MuiButton-label").click()
        self.assertEqual(u"http://localhost:3000/portfolio/editor?temp=art&id=0", driver.current_url)

    def teardown(self):
       self.driver.quit()
       self.assertEqual([], self.verificationErrors) 

if __name__ == "__main__":
    unittest.main()