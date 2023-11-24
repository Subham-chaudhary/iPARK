import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('ipark.db')
cursor = conn.cursor()



wal = cursor.execute('SELECT * FROM city_code;')

rows = wal.fetchall()
print(rows)



cursor.close()
conn.close()