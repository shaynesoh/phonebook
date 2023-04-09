import React from 'react';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { MdArrowBack } from 'react-icons/md';

import { ContactsContext } from '../apiContext/ContactsContext';
import ContactAddEdit from '../components/ContactAddEdit';

const ContactDetails = () => {
  const navigate = useNavigate();
  const { index } = useParams();
  const { getContacts, contacts } = useContext(ContactsContext);
  
  let contact = null;
  
  if (Array.isArray(contacts) && contacts.length > 0 && index < contacts.length) {
    contact = contacts[index];
  };

  useEffect(() => {
    getContacts();
  }, [contacts]); 

  return (
    <>
      <div className="container mx-auto py-5 px-5">
        <div className="row w-full">
          <button className="flex items-center text-gray-400 hover:text-black" onClick={() => navigate(-1)}>
            <MdArrowBack size={40} />
            <span className="ml-2 font-normal">Go back</span>
          </button>
        </div>
        <ContactAddEdit contact={contact} index={index}/>
      </div>
    </>
  )
}

export default ContactDetails;