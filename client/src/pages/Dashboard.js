import React from 'react';
import AuthService from '../utils/auth';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={AuthService.logout}>Logout</button>
    </div>
  )
};

export default Dashboard;
