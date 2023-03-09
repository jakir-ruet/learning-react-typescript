import React from 'react';
import UsingProps from '../container/UsingProps';
import UsingMap from '../container/UsingMap';
import UsingObject from '../container/UsingObject';
import './App.css';

function App() {
  // for object passing
  const userInfoOne = {
    name: 'Jakir Object',
    email: 'jakir@gmail.com',
    phone: 87438947,
    isBoy: true,
    skills: ['java', 'html', 'css'],
  };
  return (
    <div className="text-center">
      <h1>Hello</h1>
      <hr />
      <UsingProps />
      <hr />
      <UsingMap
        name="Jakir map"
        email="jakir@gmail.com"
        phone={87438947}
        isBoy={true}
        skills={['java', 'html', 'css']}
      />
      <hr />
      <UsingObject userInfo={userInfoOne} />
    </div>
  );
}

export default App;
