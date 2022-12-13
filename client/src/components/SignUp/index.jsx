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
    <main>
      {data ? (
        <p variant='subtitle1'>Successfully created an account. You may now head{' '}<Link to='/'>back to the hompage.</Link></p>
      ) : (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              placeholder='Username'
              name='username'
              type='text'
              value={formState.username}
              onChange={handleChange}
            />
            <input
              placeholder='Email'
              name='email'
              type='text'
              value={formState.email}
              onChange={handleChange}
            />
            <input
              placeholder='Password'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />
            <button type='submit'>Sign Up</button>
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
