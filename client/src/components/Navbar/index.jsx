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
            <NavLogo to="/"><span id="fanIcon"><GiComputerFan/></span> Technigram</NavLogo>
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
                <NavLinks to="/signup">Sign Up</NavLinks>
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