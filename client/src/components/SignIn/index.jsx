import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
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
    <Container id='discContainer' className='loginCard'>
      {data ? (
        <p>Successfully logged in! You may now head{' '}<Link to='/'>back to the homepage.</Link></p>
      ) : (
      <Row id='discRow' className='container-fluid'>
        <Col id='discCol'>
            <Col>
            <Card id='discPost'>
            <form onSubmit={handleFormSubmit}>
              <h2>Sign In</h2>
              <div className='form-group formstyle'>
                <h3>Email</h3>
                <input
                  className='form-control'
                  placeholder='Email'
                  name='email'
                  type='email'
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

            <div className='form-group formstyle'>
              <h3>Password</h3>
              <input
                className='form-control'
                placeholder='Password'
                name='password'
                type='password'
                value={formState.password}
                onChange={handleChange}
              />
            </div>
              <button type='submit' id='btn'>Sign In</button>
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

export default Login;