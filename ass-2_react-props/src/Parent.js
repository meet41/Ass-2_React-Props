import React from 'react';
import UserProfile from './UserProfile';

const Parent = () => {
  const users = [
    {
      name: 'John Doe',
      age: 30,
      location: 'New York, USA',
      bio: 'Software developer with a passion for creating amazing applications.'
    },
    {
      name: 'Jane Smith',
      age: 25,
      location: 'San Francisco, USA',
      bio: 'Graphic designer who loves to create beautiful and functional designs.'
    },
    {
      name: 'Alice Johnson',
      age: 28,
      location: 'Los Angeles, USA',
      bio: 'Product manager with a knack for bringing ideas to life.'
    }
  ];

  return (
    <div>
        <h1>Parent Data</h1>
      {users.map((user, index) => (
        <UserProfile 
          key={index} 
          name={user.name} 
          age={user.age} 
          location={user.location} 
          bio={user.bio} 
        />
      ))}
    </div>
  );
};

export default Parent;