import React from 'react';

import { MdSearch } from 'react-icons/md';

const Searchbar = () => {
  return (
    <>
      <form className="py-5">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="flex items-center justify-between relative">
          <input
            type="search"
            id="search"
            className="flex-1 w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-teal-500"
            placeholder="Search for a contact"
            required />
          <button
            type="submit"
            className="text-white ml-3 bg-teal-700 hover:bg-teal-800 rounded-lg p-4"
          >
            <MdSearch size={25} />
          </button>
        </div>
      </form>
    </>
  )
}

export default Searchbar;