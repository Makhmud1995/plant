import React from 'react'
import {Nav,Logo,Menu,Button} from './style'
import Logop from '../../assets/Logo.svg'

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img  src={Logop} alt=''></img>
      </Logo>
      <Menu>
        <p>Service</p>
        <p>Service</p>
        <p>Service</p>
        <p>Service</p>
      </Menu>
      <Button>
        Check Out
      </Button>
    </Nav>
  )
}



export default Navbar
