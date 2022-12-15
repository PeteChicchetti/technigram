import React from 'react';
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


const Navbar = ({ toggle }) => {
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
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default Navbar;