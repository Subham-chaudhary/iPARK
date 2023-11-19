from flask import Flask, render_template, jsonify
import requests

app = Flask(__name__)


@app.route("/")
def index():
    """Fetch JSON data from an external URL and render the index template."""
    # Make an HTTP GET request to the URL
    response = requests.get("https://json.extendsclass.com/bin/ca7c6cea8359")

    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        # Pass the fetched JSON data to the index template
        return render_template('index.html', city=data)

    else:
        # Return an error message if the request failed
        return render_template('index.html', error_message="Failed to fetch JSON data")


if __name__ == "__main__":
    app.run(debug=True)