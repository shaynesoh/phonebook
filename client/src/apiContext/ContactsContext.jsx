import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const ContactsContext = createContext([]);

const ContactsProvider = ({ children }) => {

  const [contacts, setContacts] = useState([]);

  const baseApi = axios.create({
    baseURL: "http://127.0.0.1:5000",
  });

  const getContacts = () => {
    baseApi.get('/contact')
      .then(response => {
        if (response && response.data && response.data.contacts) {
          setContacts(response.data.contacts);
        }
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  const addContact = (newContact) => {
    baseApi.post('/contact', newContact)
      .then(response => {
        if (response && response.data && response.data.contacts) {
          setContacts([...contacts, response.data.contacts]);
        } else {
          setContacts([...contacts, response.data]);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const deleteContact = (id) => {
    baseApi.delete(`/contact/delete/${id}`)
      .then(response => {
        if (response && response.data && response.data.contacts) {
          setContacts(contacts.filter((contact) => contact._id !== id));
        }
        console.log(contacts);
      })
      .catch(error => {
        console.error(error);
      });
  }  

  const editContact = (id, updatedContact) => {
    baseApi.put(`/contact/update/${id}`, updatedContact)
      .then(response => {
        if (response && response.data && response.data.contacts) {
          setContacts(contacts.map((contact) => (contact._id === id ? updatedContact : contact)));
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <ContactsContext.Provider value={{ contacts, getContacts, addContact, deleteContact, editContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
