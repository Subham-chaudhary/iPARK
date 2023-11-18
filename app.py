from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    msg1 = "hiiiii"
    msg2 = "byeeee"
    return render_template('index.html', msg1 = msg1, msg2 = msg2)