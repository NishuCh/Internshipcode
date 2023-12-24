import React, { useState, useEffect } from 'react';
import './Readmore.css';
// import { useParams } from "react-router-dom";
// import axios from 'axios';

const Readmore: React.FC = () => {
//   const [student, setStudent] = useState({
//     post_tittle: "",
//     post_des: ""
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("https://acesoftech.co.in/API/blog_api/singleblog.php?id=" + id);
//     setStudent(result.data);
//     console.log(result.data);
//   }

   return (
    <div>
      <div className='read-more'>
        <h2>HTML</h2>
        <p>HTML stands for Hypertext markup language It is used in web development</p>
      </div>
    </div>
  )
}

export default Readmore;
