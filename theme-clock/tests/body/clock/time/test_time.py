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
# Open the Flask application
driver.get('http://127.0.0.1:5500/theme-clock/index.html')  

element = driver.find_element(By.XPATH, '/html/body/div[1]/div[2]')

text = element.text

background_color = element.value_of_css_property('background-color')

color = element.value_of_css_property('color')

time.sleep(3)

if element:
    print('The time is found')
else:
    print('The time is not found')
    
print(f'Time is {text}')
print(f'Color is {background_color}')
print(f'Text color is {color}')

# Close the browser window
driver.quit()