import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div>
      <h1 className='headding'>Title</h1>
      <h3>Users</h3>
      <div className='flexCon'>
        {users.map(user => (
        <Link className='link1' key={user.id} to={`/user/${user.id}`}>
          <div className="user-info">
          <div className="user-img-con">
            <div className="user-img">
              <img className='image' src={user.avatar} alt={`User ${user.id}`} />
            </div>
            </div>
              <p className='para'>{user.first_name} {user.last_name}</p>
              <span className='email'>{user.email}</span>
          </div>
        </Link>
      ))}
       </div>
      
      
    </div>
  );
};

export default UsersView;
