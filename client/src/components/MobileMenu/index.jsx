import React from 'react';
import { 
    MenuContainer, 
    CloseIcon, 
    Icon, 
    MobileWrapper, 
    MobileMenu, 
    MobileLink, 
    MobileBtnWrapper, 
    MobileRoute 
} from './MobileMenuElements';

const MobileMenu = () => {
  return (
    <MenuContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <MobileWrapper>
            <MobileMenu>
                <MobileLink to="/news">News</MobileLink>
                <MobileLink to="/builds">Builds</MobileLink>
                <MobileLink to="/discussions">Discussions</MobileLink>
                <MobileLink to="/signup">Sign Up</MobileLink>
            </MobileMenu>
            <MobileBtnWrapper>
                <MobileRoute to='/signin'>Sign In</MobileRoute>
            </MobileBtnWrapper>
        </MobileWrapper>
    </MenuContainer>
  )
}

export default MobileMenu;