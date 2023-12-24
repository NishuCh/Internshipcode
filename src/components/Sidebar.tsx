import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='logo'>SOCIOWEB</div>
        <div className='category'>
          <ul>
            <li>
              <Link to={'/dashboard'} className="Link" style={{ color: 'white' }}>Dashboard</Link>
            
            </li>
            <li>
              <Link to={'/addpost'} className="Link" style={{ color: 'white' }}>Add Post</Link>
             
            </li>
            <li>
              <Link to={'/viewpost'} className="Link" style={{ color: 'white' }}>View Post</Link>
             
            </li>
            <li>
              <Link to={'/profilepage'} className="Link" style={{ color: 'white' }}>Your Profile</Link>
             
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
