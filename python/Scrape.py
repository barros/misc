import requests
from bs4 import BeautifulSoup

def scrape():
    page = requests.get("https://www.baseball-reference.com/teams/BOS/2019-batting.shtml")
    soup = BeautifulSoup(page.content, 'html.parser')

    My_table = soup.find('table',{'class':'sortable stats_table'})
    table_header = My_table.find('thead')
    header_row = table_header.find('tr')
    col_names = []
    for name in header_row.findAll('th'):
      col_names.append(name.string)

    table_body = My_table.find('tbody')
    row = table_body.find('tr')
    print(col_names[0])
    print(row.th.string)
    rowData = row.findAll('td')
    for i in range(1, len(col_names)):
      print(col_names[i])
      print(rowData[i-1].string)

scrape()

