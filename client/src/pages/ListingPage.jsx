import React, { useContext } from 'react';

import { ContactsContext } from '../context/ContactsContext';
import ContactList from '../components/ContactList';
import Searchbar from '../components/Searchbar';

const ListingPage = () => {
  const { contacts, deleteContact } = useContext(ContactsContext);

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
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            <ContactList contacts={contacts} handleDeleteContact={deleteContact} />
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListingPage;
