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
import Signup from './components/SignUp/index';
import Signin from './components/SignIn/index';
import Footer from './components/Footer';
import Builds from './components/Builds/index';
import SingleBuild from './components/SingleBuild/index';
import Discussions from './components/Discussions/index';
import CreatePost from './components/CreatePost/index';
import News from './components/News/index';

/// IMPORT COMPONENTS ///
import ProtectRoute from './components/ProtectRoute';

import './App.css';

import './components/SignUp/signup.css';
import './components/SignIn/signin.css';
import './components/Navbar/navbar.css';
import './components/Footer/footer.css';
import './components/Builds/builds.css';
import './components/SingleBuild/singleBuild.css';
import './components/Discussions/discussions.css';
import './components/News/news.css';
import './components/CreatePost/createPost.css';
import './components/Comments/comments.css';


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
        <main id="background">
        <Routes>
          <Route path='/' element={<News />}/>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='/'
            element={Auth.loggedIn() ? <News /> : <ProtectRoute />}
          />
          <Route path='/builds' element={<Builds />}/>
          <Route path="/builds/:postid" element={<SingleBuild />}/>
          <Route path='/discussions' element={<Discussions />}/>
          <Route path='/createpost' element={<CreatePost />}/>
        </Routes>
        </main>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
