import React, { useState } from 'react';
import Header from './pages/Header';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/ContactMe';
import Footer from './pages/Footer';

// Switches and renders between the page components accordingly
// and renders main container that holds all components for a fully functional page
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  
  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>     
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />   
      {renderPage()}
      <Footer />
    </div>
  );
  
}