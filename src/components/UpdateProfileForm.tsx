import React, { useState } from 'react';
import './UpdateProfileForm.css';
import prof_img from '../profile_img.avif';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
const UpdateProfileForm: React.FC = () => {
    return (
        <div>
          <Navbar/>
          <Sidebar/>
          <Footer/>
            <div className='Update'>
                <div className='Update-head'>
                    <h2>Update Your Profile Here!</h2>
                </div>
                <div className='Update-container'>
                    <div className='Update-content'>
                        <img src={prof_img} alt="Profile" />
                    </div>
                    <form className='Update-form1'>
                        <h2>Update Profile!</h2>
                        <div className="Update-form-group">
                            <label htmlFor="text">Name:</label>
                            <input type="text"  className='form-control'/>
                        </div>
                        <div className="Update-form-group">
                            <label htmlFor="text">Role:</label>
                            <input type="text"  className='form-control'/>
                        </div>
                        <div className="Update-form-group">
                            <label htmlFor="email">Email address:</label>
                            <input type="email" name="email" className='form-control'/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Change Password:</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className='Update-btn'>Update</button><br />
                           
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileForm;
