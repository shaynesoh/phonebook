import React, { useEffect, useContext } from 'react';

import { ContactsContext } from '../apiContext/ContactsContext';
import ContactList from '../components/ContactList';
import Searchbar from '../components/Searchbar';

const ListingPage = () => {
  const { getContacts, contacts, deleteContact } = useContext(ContactsContext);

  useEffect(() => {
    getContacts();
  }, [contacts]);

  return (
    <>
      <div className="container mx-auto py-5 px-5">
        <Searchbar />
        <table className="w-full">
          <thead className="border-b-2 border-gray-300">
            <tr>
              <th className="w-1/2 text-left font-normal py-3">
                Name
              </th>
              <th className="w-1/2 text-left font-normal py-3">
                Phone number
              </th>
            </tr>
          </thead>
          <tbody>
            <ContactList
              contacts={contacts}
              handleDeleteContact={deleteContact}
            />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListingPage;
