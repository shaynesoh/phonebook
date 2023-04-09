import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDelete } from 'react-icons/md';

const ContactList = ({ contacts, handleDeleteContact }) => {

    return (
        <>
            {contacts && contacts.map((contact, index) => (
                <tr key={index}>
                    <td className="py-3">
                        <Link to={`/contact/${index}`} className="flex items-center">
                            {contact && contact.name}
                        </Link>
                    </td>
                    <td className="py-3">{contact && contact.phone}</td>
                    <span className="flex items-center">
                        <button
                            navigate="/edit"
                            className="p-2"
                        >
                            <Link to={`/contact/${index}/edit`} className="flex items-center">
                                <MdEdit className="text-gray-400 hover:text-black" size={25} />
                            </Link>
                        </button>
                        <button
                            className="p-2"
                            onClick={() => handleDeleteContact(index)}
                        >
                            <MdDelete className="text-gray-400 hover:text-black" size={25} />
                        </button>
                    </span>
                </tr>
            ))}
        </>
    )
}

export default ContactList;
