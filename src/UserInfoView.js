import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserInfoView = () => {
  const [userInfo, setUserInfo] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data.data);
      })
      .catch(error => console.error('Error fetching user information:', error));
  }, [userId]);

  return (
    <div>
      <div className='backline'>
        <Link to="/"><p>Back</p></Link>
      </div>
      <div className='cont2'>
      <div className="user-info-details">
        <div className='user-img-con'>
        <div className="user-image">
          <img className='image2' src={userInfo.avatar} alt={`User ${userInfo.id}`} />
        </div>
        </div>
        <div className="user-details">
          <p className='flex-space'>First Name:<p className='space'></p> {userInfo.first_name}</p>
          <p className='flex-space'>Last Name:<p className='space'></p>  {userInfo.last_name}</p>
          <p className='flex-space'>Email:<p className='space'>  </p>      {userInfo.email}</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default UserInfoView;
