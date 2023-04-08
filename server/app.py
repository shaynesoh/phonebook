from flask import Flask
from flask import jsonify

app = Flask(__name__)

# route to retrieve all contacts
@app.route('/api/contacts')
def get_contacts():
    return jsonify(contacts)

# route to add new contacts
@app.route('/api/contacts', methods=['POST'])
def add_contact():
    contact = request.get_json()
    contacts.append(contact)
    return jsonify(contacts)