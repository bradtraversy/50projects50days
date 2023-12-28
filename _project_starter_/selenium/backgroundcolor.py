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

# Find the element you want to check the background color for
element = driver.find_element(By.TAG_NAME, 'body')  # Replace with your element's ID or any other locator

# Get the CSS value for the 'background-color' property of the element
background_color = element.value_of_css_property('background-color')

# Print the background color
print(f"Background color of the element: {background_color}")
time.sleep(5)

driver.quit()
