from googlesearch import search
import requests
from bs4 import BeautifulSoup
import regex

query='ml model deployement'
for url in search(query,tld='com',stop=2,lang='en'):
    print(url)
res=requests.get(url)
#binary response content
html_page=res.content

soup=BeautifulSoup(html_page,'html.parser')
text=soup.find_all('p')
text=regex.sub('<.*?>',' ',str(text))
print(text)