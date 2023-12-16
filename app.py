from flask import Flask, render_template, jsonify,request,json
from chat import get_response

app = Flask(__name__)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_bot_response():
    user_message = request.form['user_message']
    response = get_response(user_message)
    return jsonify({'bot_response': response})


if __name__ == '__main__':
    app.run(debug=True)