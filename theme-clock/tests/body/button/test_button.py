from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Define Chrome WebDriver options
chrome_options = Options()
service = Service('/Users/mac005/Downloads/chromedriver-mac-arm64/chromedriver')

# Initialize Chrome WebDriver
driver = webdriver.Chrome(service=service, options=chrome_options)
# Open the Flask application
driver.get('http://127.0.0.1:5500/theme-clock/index.html')

# Find and click the button
button = driver.find_element(By.XPATH, '/html/body/button')
button.click()

try:
    
    button = driver.find_element(By.XPATH, '/html/body/button')
    
    # Retrieve properties
    text = button.text
    background_color = button.value_of_css_property('background-color')
    text_color = button.value_of_css_property('color')

    print(f'The text in the button is {text}')
    print(f'The button background color is {background_color}')
    print(f'The text color is {text_color}')

except Exception as e:
    print(f"An error occurred: {e}")

# Close the browser window
driver.quit()
