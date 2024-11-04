

import React from 'react'


const NavHolder = () => {
  return (
    <div>
        <ul className= 'navComponent2'>
                    <NavLink to ={'/'} spy={true} smooth={true} offset={50} duration={500}><li id='home'  onClick={closeMenu}>Home <FaHome /></li></NavLink>

                    <NavLink to={'/about'} spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}><li>About <FcAbout /></li></NavLink>

                    <NavLink to={'/portfolio'} spy={true} smooth={true} offset={50} duration={500}  ><li>Portfolio <BiSolidBookHeart /></li></NavLink>

                    {/* <NavLink to={'/client'} spy={true} smooth={true} offset={50} duration={500}  onClick={closeMenu}> <li>Client</li></NavLink> */}
                </ul>
    </div>
  )
}

export default NavHolder