import React from 'react';
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu,  
  NavBtn, 
  NavBtnLink 
} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
          <NavLink to="/">
            <h1>Logo</h1>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/builds">Builds</NavLink>
            <NavLink to="/discussions">Discussions</NavLink>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </NavMenu> 
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar;