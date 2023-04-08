import './App.css';
import {Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListingPage from './pages/ListingPage';
import ContactDetails from './pages/ContactDetails';
import { ContactsProvider } from './context/ContactsContext';

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
