import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const downloadPath = "https://play.google.com/store/apps?utm_source=na_Med&utm_medium=hasem&utm_content=Nov0520&utm_campaign=Evergreen&pcampaignid=MKT-EDR-na-us-1707532-Med-hasem-ap-Evergreen-Nov0520-Text_Search_BKWS-id_100470_%7CEXA%7CONSEM_kwid_43700023142507910_adgroupid_44836429436_keywordid_kwd-298662319347&gad_source=1&gclid=EAIaIQobChMIk6vv776BhwMVqTQIBR1pzgIREAAYASAAEgKEo_D_BwE&gclsrc=aw.ds";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <Link to="/" className="logo">MoneyTransfer</Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>

     <div className="Dowload-app">
     <a href={downloadPath} className="download-button" download>
          <FaDownload className="download-icon" /> Download App
        </a>
      </div>
     
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/transfer" onClick={toggleMenu}>Transfer</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        <Link to="/signin" onClick={toggleMenu}>Sign In </Link>
        <Link to="/signup" onClick={toggleMenu}>Sign Up</Link>
        <Link to="/profile" onClick={toggleMenu}>Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;


