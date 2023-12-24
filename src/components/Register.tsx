import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import conimg from '../contact1.png';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

const Register: React.FC = () => {
//   let history = useNavigate();
//   const [data, setData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const sendData = {
//       first_name: data.first_name,
//       last_name: data.last_name,
//       email: data.email,
//       password: data.password
//     };

//     axios.post('https://acesoftech.co.in/API/blog_api/register.php', sendData)
//       .then((result) => {
//         if (result.data.status === "Invalid") {
//           alert("Invalid User");
//         } else {
//           history('/dashboard');
//         }
//       });
//   };

  return (
    <div>
      <div className='login'>
        <div className='log-head'>
          <h2>Feel free to connect with us</h2>
        </div>
        <div className='con-container'>
          <div className='con-content'>
            <img src={conimg} alt="Contact" />
          </div>
          <form className='con-form'>
            <h2>Register Here!</h2>
            <div className="form-group">
              <label htmlFor="email">First Name:</label>
              <input type="text" name="first_name"  className="form-control" placeholder="Enter First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Last Name:</label>
              <input type="text" name="last_name" className="form-control" placeholder="Enter Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email"  className="form-control" placeholder="Enter Email"  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Password:</label>
              <input type="password" name="password"  className="form-control" placeholder="Enter Password"  />
            </div>
            <div className="form-group">
              <button className='log-btn1'>Register</button><br/>
              <button className='create-account1'>
                <Link to={`/Login`}>Already have an account?</Link>
             
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
