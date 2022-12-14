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

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <MobileWrapper>
            <MobileDropdown>
                <MobileLink to="/news" onClick={toggle}>News</MobileLink>
                <MobileLink to="/builds" onClick={toggle}>Builds</MobileLink>
                <MobileLink to="/discussions" onClick={toggle}>Discussions</MobileLink>
                <MobileLink to="/signup" onClick={toggle}>Sign Up</MobileLink>
            </MobileDropdown>
            <MobileBtnWrapper>
                <MobileRoute to='/signin' onClick={toggle}>Sign In</MobileRoute>
            </MobileBtnWrapper>
        </MobileWrapper>
    </MenuContainer>
  )
}

export default MobileMenu;