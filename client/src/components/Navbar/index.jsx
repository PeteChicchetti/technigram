import React, { useState } from 'react';
import { FaBars} from 'react-icons/fa';
import { GiComputerFan } from 'react-icons/gi';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,  
  NavBtn, 
  NavBtnLink 
} from './NavbarElements'

import { setContext } from '@apollo/client/link/context';
import Auth from '../../utils/auth';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const Navbar = ({ toggle, token }) => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" id="nav-link"><span id="fanIcon"><GiComputerFan/></span> Technigram</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/news" id="nav-link">News</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/builds" id="nav-link">Builds</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/discussions" id="nav-link">Discussions</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/signup" id="nav-link">Sign Up</NavLinks>
              </NavItem>
            </NavMenu> 
            <NavBtn>
              {Auth.loggedIn() ? <NavBtnLink  id="nav-link">Sign Out</NavBtnLink> : <NavBtnLink onClick={() => setIsSignedIn(!isSignedIn)} to="/signin">Sign In</NavBtnLink>}
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default Navbar;