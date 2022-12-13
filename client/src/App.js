import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Auth from './utils/auth';

/// IMPORT PAGES ///
import Landing from './pages/Landing';
import Signup from './components/SignUp/index';
import Login from './components/Login/index';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import './App.css';
import './components/SignUp/signup.css';
import './components/Login/login.css'

const httpLink = createHttpLink({
  uri: '/graphql',
});

/// SET CONTEXT ///
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='dashboard/:userId'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
