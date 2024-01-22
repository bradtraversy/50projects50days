from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

driver.get('http://127.0.0.1:5500/github-profiles/index.html')  

element = driver.find_element(By.XPATH, '//*[@id="search"]')

element.send_keys('Hammad1007')
element.send_keys(Keys.ENTER)

wait = WebDriverWait(driver, 10)
main_element = wait.until(EC.presence_of_element_located((By.ID, 'main')))

time.sleep(3)

print('Success!')

driver.quit()