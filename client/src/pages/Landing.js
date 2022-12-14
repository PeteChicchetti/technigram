import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MobileMenu from '../components/MobileMenu';



const Landing = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MobileMenu isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
    </>
  )
};

export default Landing;
