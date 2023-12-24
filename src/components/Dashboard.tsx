import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';

import './Dashboard.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface CardProps {
  title?: string;
  content?: JSX.Element;
}


const Dashboard: React.FC<CardProps> = ({ title, content }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [userPreference, setUserPreference] = useState<'like' | 'dislike' | null>(null);

  const handleLike = () => {
    if (userPreference === 'like') {
      setLikeCount(likeCount - 1);
      setUserPreference(null);
    } else {
      setLikeCount(likeCount + 1);
      setUserPreference('like');
      if (userPreference === 'dislike') {
        setDislikeCount(dislikeCount - 1);
      }
    }
  };
  
  const handleDislike = () => {
    if (userPreference === 'dislike') {
      setDislikeCount(dislikeCount - 1);
      setUserPreference(null);
    } else {
      setDislikeCount(dislikeCount + 1);
      setUserPreference('dislike');
      if (userPreference === 'like') {
        setLikeCount(likeCount - 1);
      }
    }
  };
 

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Footer />
      <div className='dash-head'>
        <h2>Your Posts!</h2>
        <div className='dash_container'>
          <div className='dash_row'>
            <div className='dash_img'>
              <div className='dash_info'>
                <span className='dash_tittle'>HTML</span>
                <p>HTML stands for Hypertext markup language It is used in web development</p>
                <button className='dash_read-btn'>
                  <Link to={`/Readmore`}>Read more</Link>
                </button>
                <div className='dash_com-like'>
                  <button className='dash_com-btn'>
                    <Link to={`/Comment`} style={{ color: "white" }}>Comment</Link>
                  </button>
                  <div className='dash_likedislike'>
                    <button onClick={handleLike}>
                      <span role="dash_img" aria-label="like">👍</span>
                    </button>
                    <span>{likeCount}</span>
                    <button onClick={handleDislike}>
                      <span role="dash_img" aria-label="dislike">👎</span>
                    </button>
                    <span>{dislikeCount}</span>
                  </div>
                  <span onClick={handleBookmarkClick}>
                   <FaBookmark color={isBookmarked ? 'gray' : 'lightskyblue'} />
                   </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
