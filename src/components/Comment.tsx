import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Comment.css';
import messimg from '../message.png';

const Comment: React.FC = () => {
  return (
    <div className='comment'>
      <Navbar />
      <Sidebar/>
      <Footer />

      <form className='com-form'>
        <div className='com-img'>
          <img src={messimg} />
          <div className='col'>
            <h2 className='com-heading'>Share your opinions here! </h2>
            <textarea className="com-textarea" placeholder='Add Comment'></textarea>
          </div>
          <div className='col'>
            <div className='com-btn'>
              <button type='submit' className='com'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Comment;
