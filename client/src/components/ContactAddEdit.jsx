import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdPerson, MdPhone, MdEmail } from 'react-icons/md';
import { ContactsContext } from '../context/ContactsContext';

const ContactAddEdit = ({ contact }) => {

    const navigate = useNavigate();
    const { addContact, editContact } = useContext(ContactsContext);

    const [name, setName] = useState(contact ? contact.name : '');
    const [phone, setPhone] = useState(contact ? contact.phone : '');
    const [email, setEmail] = useState(contact ? contact.email : '');
    const [editMode, setEditMode] = useState(Boolean(contact));

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name, phone, email };
        if (editMode && contact) {
            editContact(contact.id, newContact);
        } else {
            addContact(newContact);
        }
        navigate("/");
    };

    return (
        <>
            <div className="row w-full py-5 mt-5">
                {editMode ? <h1 className="text-3xl">View contact details</h1> : <h1 className="text-3xl">Add new contact</h1> }
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4 my-8 w-full items-center">
                    <MdPerson size={28} className="opacity-[0.56]" />
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                        placeholder="Name of contact"
                        required
                    />
                </div>
                <div className="flex gap-4 my-8 w-full items-center">
                    <MdPhone size={28} className="opacity-[0.56]" />
                    <input
                        type="number"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone} 
                        class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                        placeholder="Phone number of contact"
                        required
                    />
                </div>
                <div className="flex gap-4 my-8 w-full items-center">
                    <MdEmail size={28} className="opacity-[0.56]" />
                    <input
                        type="text"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        class="bg-gray-50 border border-gray-400 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                        placeholder="Email address of contact" />
                </div>
                <div className="flex gap-4">
                    <div className="flex justify-end items-end">
                        <button
                            type="submit"
                            class="text-white bg-teal-700 hover:bg-teal-800 rounded-lg p-4">
                            {editMode ? 'Save Changes' : 'Save Contact'}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}


export default ContactAddEdit;