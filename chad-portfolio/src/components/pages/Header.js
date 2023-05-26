import React from 'react';

// Styles for header
const headerStyle = { listStyle: "none",
                      display: "flex"
                    }

// Render header for every page
function Header({ currentPage, handlePageChange }) {
  return (
    
    <div className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Chad Miller</h3>
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item" style={headerStyle}>
              <a href="#about-me"
                 onClick={() => handlePageChange('About')}
                 className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </a>
            </li>
            <li className="nav-item" style={headerStyle}>
              <a href="#projects"
                 onClick={() => handlePageChange('Projects')}
                 className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
              >
                Projects
              </a>
            </li>
            <li className="nav-item" style={headerStyle}>
              <a href="#contact"       
                 onClick={() => handlePageChange('Contact')}
                 className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
        </a>
      </li>
    </ul>
    </div>
    </div>
  );
}

export default Header;