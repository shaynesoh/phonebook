import { createContext } from 'react';
import { useState } from 'react';

const ContactsContext = createContext([]);

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((c, i) => i !== index));
  };

  const editContact = (id, updatedContact) => {
    const contactIndex = contacts.findIndex((contact) => contact.id === id);
    if (contactIndex !== -1) {
      contacts.splice(contactIndex, 1, updatedContact);
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  };  

  return (
    <ContactsContext.Provider value={{ contacts, addContact, deleteContact, editContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsContext, ContactsProvider };
