import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';


const Signup = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  /// UPDATES STATE BASED ON INPUT ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// HANDLE SUBMISSION OF FORM ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token, data.addUser.user._id);
    } catch (error) {
      console.log(error);
    };
  };

  return (
    <main className='signupCard'>
      {data ? (
        <p variant='subtitle1'>Successfully created an account. You may now head{' '}<Link to='/'>back to the hompage.</Link></p>
      ) : (
        <div>
          <form onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>
            <div className="form-group">
            <h3>Enter Username</h3>
            <input
              className='form-control'
              placeholder='Username'
              name='username'
              type='text'
              value={formState.username}
              onChange={handleChange}
            />
            </div>

            <div className='form-group'>
            <h3>Enter Email</h3>
            <input
              className='form-control'
              placeholder='Email'
              name='email'
              type='text'
              value={formState.email}
              onChange={handleChange}
            />
            </div>

            <div className='form-group'>
            <h3>Enter Password</h3>
            <input
              className='form-control'
              placeholder='Password'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Sign Up</button>
          </form>
        </div>
      )}
      {error && (
        <div>
          {error.message}
        </div>
      )}
    </main>
  );
};

export default Signup;

