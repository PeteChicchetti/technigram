import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
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
    <Container id='discContainer' className='signupCard'>
      {data ? (
      <p variant='subtitle1'>Successfully created an account. You may now head{' '}<Link to='/'>back to the hompage.</Link></p>
    ) : (
      <Row id='discRow' className='container-fluid'>
        <Col id='discCol'>
            <Col>
            <Card id='discPost'>
            <form onSubmit={handleFormSubmit}>
            <h2>Sign Up</h2>
              <div className="form-group formstyle">
              <h3>Username</h3>
              <input
                className='form-control'
                placeholder='Username*'
                name='username'
                type='text'
                value={formState.username}
                onChange={handleChange}
              />
              </div>

              <div className='form-group formstyle'>
              <h3>Email</h3>
              <input
                className='form-control'
                placeholder='Email*'
                name='email'
                type='text'
                value={formState.email}
                onChange={handleChange}
              />
              </div>

              <div className='form-group formstyle'>
              <h3>Password</h3>
              <input
                className='form-control'
                placeholder='Password*'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />
              </div>
              <button type='submit' id='SignUpBtn'>Sign Up</button>
            </form>
            </Card>
            </Col>
        </Col>
      </Row>
      )}
      {error && (
        <div>{error.message}</div>
      )}
    </Container>
  );
};

export default Signup;

