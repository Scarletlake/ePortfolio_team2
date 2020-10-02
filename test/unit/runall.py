
import unittest,csv
import os,sys
import time

import test_homePage
import test_landingPage
import test_signinPage
import test_signupPage
import test_nav
import test_profilePage
import test_initProfilePage
import test_portfolioeditorPage
import test_templatePage
#手工添加案例到套件，
def createsuite():
     suite = unittest.TestSuite()
     #将测试用例加入到测试容器（套件）中
     suite.addTest(unittest.makeSuite(test_homePage.TestHome))
     suite.addTest(unittest.makeSuite(test_landingPage.TestLanding))
     suite.addTest(unittest.makeSuite(test_signinPage.TestSignIn))
     suite.addTest(unittest.makeSuite(test_signupPage.TestSignup))
     suite.addTest(unittest.makeSuite(test_nav.TestNav))
     suite.addTest(unittest.makeSuite(test_profilePage.TestProfile))
     suite.addTest(unittest.makeSuite(test_initProfilePage.TestInitProfile))
     suite.addTest(unittest.makeSuite(test_portfolioeditorPage.TestPortfolioEditor))
     suite.addTest(unittest.makeSuite(test_templatePage.TestTemplate))
     return suite
     
if __name__=="__main__":
     suite=createsuite()
     runner = unittest.TextTestRunner(verbosity=2)
     runner.run(suite)