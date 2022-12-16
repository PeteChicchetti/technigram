import React from 'react';
import { 
    MenuContainer, 
    CloseIcon, 
    Icon, 
    MobileWrapper, 
    MobileDropdown, 
    MobileLink, 
    MobileBtnWrapper, 
    MobileRoute 
} from './MobileMenuElements';

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

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <MobileWrapper>
            <MobileDropdown>
                <MobileLink to="/" onClick={toggle}>News</MobileLink>
                <MobileLink to="/builds" onClick={toggle}>Builds</MobileLink>
                <MobileLink to="/discussions" onClick={toggle}>Discussions</MobileLink>
                {Auth.loggedIn() ? <MobileLink to="/signup" onClick={toggle} style={{ display: 'none' }}>Sign Up</MobileLink> : <MobileLink to="/signup" onClick={toggle}>Sign Up</MobileLink>}
            </MobileDropdown>
            <MobileBtnWrapper>
                {Auth.loggedIn() ? <MobileRoute onClick={toggle}>Sign Out</MobileRoute> : <MobileRoute to='/signin' onClick={toggle}>Sign In</MobileRoute>}
            </MobileBtnWrapper>
        </MobileWrapper>
    </MenuContainer>
  )
}

export default MobileMenu;