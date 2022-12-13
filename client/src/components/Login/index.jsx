import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  /// HANDLE CHANGE ///
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /// FORM SUBMISSION ///
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token, data.login.user._id);
    } catch (error) {
      console.log(error);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className='loginCard'>
      {data ? (
        <p>Successfully logged in! You may now head{' '}<Link to='/'>back to the homepage.</Link></p>
      ) : (
        <div>
          <form onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <div className='form-group'>
            <h3>Email</h3>
            <input
              className='form-control'
              placeholder='Your email'
              name='email'
              type='email'
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <h3>Password</h3>
            <input
              className='form-control'
              placeholder='Your password'
              name='password'
              type='password'
              value={formState.password}
              onChange={handleChange}
            />
          </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'>Login</button>
          </form>
        </div>
      )}
      {error && (
        <div>{error.message}</div>
      )}
    </main>
  );
};

export default Login;