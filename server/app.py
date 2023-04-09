from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import json_util, ObjectId
import json
import os

mongo_uri = os.environ.get('MONGO_URI')
app = Flask(__name__)
CORS(app)

client = MongoClient(mongo_uri)
db = client['phonebook']
collection = db['contact']

@app.route('/contact', methods=['GET'])
def get_contacts():
    # print("--------")
    contact = list(collection.find())
    # print(contact)
    # print("--------")
    contact = json.loads(json_util.dumps(contact))
    return jsonify({'contacts': contact})

@app.route('/contact', methods=['POST'])
def add_contact():
    contact = request.json
    # print("--------")
    # print(contact)
    # print("--------")
    collection.insert_one(contact)
    return jsonify({'message': 'Contact added successfully.'})

@app.route('/contact/update/<id>', methods=['PUT'])
def update_contact(id):
    print('----------')
    contact = request.json
    print(contact)
    print('----------')
    document_to_update = collection.find_one({}, skip=int(id))
    if document_to_update:
        collection.update_one({'_id': document_to_update['_id']}, {'$set': contact})
    return jsonify({'message': 'Contact updated successfully.'})

@app.route('/contact/delete/<id>', methods=['DELETE'])
def delete_contact(id):
    document_to_delete = collection.find_one({}, skip=int(id))
    if document_to_delete:
        collection.delete_one({'_id': document_to_delete['_id']})
    # collection.delete_one({'_id': id})
    return jsonify({'message': 'Contact deleted successfully.'})

if __name__ == '_main_':
    app.run(debug=True)