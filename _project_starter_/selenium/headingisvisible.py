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

driver.get('http://127.0.0.1:5500/_project_starter_/')

# Find the element with a specific tag name (e.g., 'h1' for heading)
heading_element = driver.find_element(By.TAG_NAME, 'h1')

# Print the text content of the heading element
print(heading_element.text)

time.sleep(5)

driver.quit()
