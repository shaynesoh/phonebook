import './App.css';
import {Routes, Route } from 'react-router-dom';

import { ContactsProvider } from './apiContext/ContactsContext';
import Header from './components/Header';
import ListingPage from './pages/ListingPage';
import ContactDetails from './pages/ContactDetails';

function App() {
  return (
    <>
      <ContactsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListingPage />} />
          <Route path="/add" element={<ContactDetails />} />
          <Route path="/contact/:index" element={<ContactDetails />} />
          <Route path="/contact/:index/edit" element={<ContactDetails />} />
        </Routes>
      </ContactsProvider>
    </>
  );
}

export default App;
