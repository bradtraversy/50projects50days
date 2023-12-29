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

element = driver.find_element(By.CLASS_NAME, 'magic')

# Color of the button
btncolor = element.value_of_css_property('background-color')

# Box shadow color of the button
btnboxshadowcolor = element.value_of_css_property('box-shadow')

# Color of the text
textcolor = element.value_of_css_property('color')

time.sleep(3)

print('The color of the button is: ', btncolor)
print('The box shadow color of the button is: ', btnboxshadowcolor)
print('The text color of the button text is: ', textcolor)


driver.quit()