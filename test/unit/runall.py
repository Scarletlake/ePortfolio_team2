
import unittest,csv
import os,sys
import time

import test_homePage
import test_landingPage
import test_signinPage
import test_signupPage
import test_nav

#手工添加案例到套件，
def createsuite():
     suite = unittest.TestSuite()
     #将测试用例加入到测试容器（套件）中
     suite.addTest(unittest.makeSuite(test_homePage.TestHome))
     suite.addTest(unittest.makeSuite(test_landingPage.TestLanding))
     suite.addTest(unittest.makeSuite(test_signinPage.TestSignIn))
     suite.addTest(unittest.makeSuite(test_signupPage.TestSignup))
     suite.addTest(unittest.makeSuite(test_nav.TestNav))
     return suite
     
if __name__=="__main__":
     suite=createsuite()
     runner = unittest.TextTestRunner(verbosity=2)
     runner.run(suite)