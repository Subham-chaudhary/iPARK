from flask import Flask, render_template, jsonify, request, redirect, url_for
import requests
import sqlite3
import json



app = Flask(__name__)


@app.route("/")
def index():
    
    data = searchcity()

   
    return render_template('index.html', city=data)

        
    

@app.route("/mapv1")
def mapv1():
    
    data = searchcity()
    

    return render_template('Map1.html', city=data)

@app.route("/test")
def test():
    
    msg = request.args.get('msg2', '')

    return render_template('test.html')

def searchcity():
    conn = sqlite3.connect('iPark.db')
    cursor = conn.cursor()
    select_query = 'SELECT * FROM city_code'
    cursor.execute(select_query)
    rows = cursor.fetchall()
    cursor.close()
    data_list = []
    columns = [desc[0] for desc in cursor.description]  # Get column names
    for row in rows:
        data_list.append(dict(zip(columns, row)))
    print(data_list)



if __name__ == "__main__":
    app.run(debug=True)