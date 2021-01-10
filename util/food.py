import requests
import urllib.request
import time
from bs4 import BeautifulSoup
# import numpy as np
# import pandas as pd
from urllib.request import urlopen


url = 'https://en.wikipedia.org/wiki/Tamil_cuisine'
html = urlopen(url)
soup = BeautifulSoup(html, 'html.parser')


d = soup.find_all("div", class_="div-col")

# print(d.find_next_siblings('span'))
c = d[10]
e = c.find('ul')
# .get_text()
rices = e.find_all('li')

ans = []

for i in rices:
    j = i.get_text()
    ans.append({"name": j.split('-')[0]})


print(ans)
