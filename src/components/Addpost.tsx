import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import './Addpost.css';

const Addpost: React.FC = () => {
//   let history = useNavigate();
//   const [student, setStudent] = useState({
//     post_tittle: "",
//     post_des: ""
//   });

//   const { post_tittle, post_des } = student;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setStudent({ ...student, [e.target.name]: e.target.value });
//   };

//   const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await axios.post("https://acesoftech.co.in/API/blog_api/insert.php", student, { mode: 'cors' })
//       .then((result) => {
//         console.log(result);
//         if (result.data.status === 'valid') {
//           history(`/ViewPost`);
//         } else {
//           alert("There is a problem in adding, please try again");
//         }
//       });
//   };

  return (
    <div className='addpost'>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='form'>
        <div className='form-heading'>
          <h2>Add Post Here!</h2>
        </div>
        <form>
          <div className='row'>
            <div className='col'>
              <input className='form-control' type='text' name='post_tittle' placeholder='Post Title'  />
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <textarea name='post_des' className="textarea" placeholder='Post Description' ></textarea>
            </div>
          </div>
          <div className='row'>
            <div className='sub-btn'>
              <button type='submit' className='sub'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addpost;
