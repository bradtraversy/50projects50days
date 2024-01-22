from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/github-profiles/index.html')  

element = driver.find_element(By.XPATH, '//form[@class="user-form"]')

time.sleep(3)

if element:
    print('Search bar is visible')
else:
    print('Search bar not visible')
    
# Close the browser window
driver.quit()