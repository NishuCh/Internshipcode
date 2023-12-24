import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Viewpost.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Viewpost: React.FC = () => {
//   const [student, setStudent] = useState<any[]>([]);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     const result = await axios.get("https://acesoftech.co.in/API/blog_api/view.php");
//     setStudent(result.data.records);
//     // console.log(result.data);
//   };

//   const deleteUser = (id: number) => {
//     axios.delete("https://acesoftech.co.in/API/blog_api/delete.php", { data: { id: id } })
//       .then((result) => {
//         loadUsers();
//       }).catch(() => {
//         alert("Unable to Delete!");
//       });
//   };

  return (
    <div className='viewpost'>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='table-cont'>
        <h2>View Post Here!</h2>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Post Tittle</th>
              <th scope="col">Post Description</th>
              <th scope="col">EDIT</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {/* {student?.map((students, index) => ( */}
              <tr>
                <td>1</td>
                <td>HTML</td>
                {/* <td>{students.post_des }</td> */}
                <td>HTML stands for Hypertext markup language...</td>
                {/* <td><Link className="edit-btn" to={`/Editpost/${students.id}`}>EDIT</Link></td>
                <td><Link className="delete-btn" to="" onClick={() => deleteUser(students.id)}>DELETE</Link></td> */}
                <td><Link className="edit-btn" to={`/Editpost`}>EDIT</Link></td>
                <td><Link className="delete-btn" to={`/`}>DELETE</Link></td>
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Viewpost;
