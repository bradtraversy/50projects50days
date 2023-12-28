from selenium import webdriver
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
driver.get('https://www.google.com')

# Find the search bar by name attribute (assuming the name is 'q')
search_box = driver.find_element(By.NAME, 'q')

# Enter a search query and submit
search_box.send_keys('Selenium WebDriver')
search_box.send_keys(Keys.RETURN)

# Wait for results (not necessary in this case, but useful for pages with dynamic content)
driver.implicitly_wait(10)  # 5 seconds

# Perform Assertions (for example, check the title of the search results page)
assert 'Selenium WebDriver' in driver.title

# Close the browser
driver.quit()
