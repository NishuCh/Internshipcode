import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <div className='button'>
        <button className='btn'>
        <Link to={`/Login`}  style={{ color: ' #161A30' }}>Logout</Link>
        </button>
        
      </div>
    </div>
  );
};

export default Navbar;
