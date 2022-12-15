import React, { useState } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Auth from './utils/auth';

/// IMPORT PAGES ///

import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import Landing from './pages/Landing';
import Signup from './components/SignUp/index';
import Signin from './components/SignIn/index';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Builds from './components/Builds/index';
import Discussions from './components/Discussions/index';
import CreatePost from './components/CreatePost/index';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import './App.css';

import './components/SignUp/signup.css';
import './components/SignIn/signin.css';
import './components/Navbar/navbar.css';
import './components/Footer/footer.css';
import './components/Builds/builds.css';
import './components/Discussions/discussions.css';
import './components/News/news.css';
import './components/CreatePost/createPost.css';


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
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <MobileMenu isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='dashboard/:userId'
            element={Auth.loggedIn() ? <Dashboard /> : <ProtectRoute />}
          />
          <Route path='/builds' element={<Builds />}/>
          <Route path='/discussions' element={<Discussions />}/>
          <Route path='/createpost' element={<CreatePost />}/>
        </Routes>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
