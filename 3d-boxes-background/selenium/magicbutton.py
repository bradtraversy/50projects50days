from selenium import webdriver
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options

# Define Chrome WebDriver options
chrome_options = Options()
# chrome_options.add_argument("--headless")  # Run headless if needed
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)

# Open Google
driver.get('http://127.0.0.1:5500/3d-boxes-background')

element = driver.find_element(By.CLASS_NAME, 'magic').click()

bigbox = driver.find_element(By.CLASS_NAME, 'box')

time.sleep(2)

element = driver.find_element(By.CLASS_NAME, 'magic').click()

bigbox = driver.find_element(By.ID, 'boxes')

time.sleep(5)

print('The button has been clicked successfully.')
driver.quit()