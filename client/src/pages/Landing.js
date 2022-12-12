import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main>
      <Link to='/signup' style={{ textDecoration: 'none' }}>
        <h1>Sign Up now</h1>
      </Link>
      <Link to='/login' style={{ textDecoration: 'none' }}>
        <h1>Login now</h1>
      </Link>
    </main>
  )
};

export default Landing;
