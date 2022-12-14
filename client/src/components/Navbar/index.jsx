import React from 'react';
import { FaBars } from 'react-icons/fa';
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

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">Technigram</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/news">News</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/builds">Builds</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/discussions">Discussions</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/sign-up">Sign Up</NavLinks>
              </NavItem>
            </NavMenu> 
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default Navbar;