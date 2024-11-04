import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from './component/Nav';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { BiSolidBookHeart } from "react-icons/bi";




const Header = () => {

  const [showNav, setShowNav] = useState(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  }




  return (
    <Container>
      <div className='logo'>
           <span><span className='sam'>S.</span><span className='okolie'>O</span></span>
           {/* <img src="/public/logo-removebg-preview.png" alt="" /> */}
      </div>
      <div className='navBar'>
          <ul>
            <NavLink to ={'/'} spy={true} smooth={true} offset={50} duration={500}><li id='home'>Home <FaHome /></li></NavLink>
            <NavLink to={'/about'} spy={true} smooth={true} offset={50} duration={500}><li>About <FcAbout /></li></NavLink>
          <NavLink to={'/portfolio'} spy={true} smooth={true} offset={50} duration={500}><li>Portfolio <BiSolidBookHeart /></li></NavLink>
          </ul>
      </div>
      <div className={showNav?'navBar2':'none'}>
          <ul>
            <NavLink to ={'/'} ><li id='home'>Home </li></NavLink>
            <NavLink to={'/about'} spy={true} smooth={true} offset={50} duration={500}><li>About </li></NavLink>
          <NavLink to={'/portfolio'} spy={true} smooth={true} offset={50} duration={500}><li>Portfolio </li></NavLink>
          </ul>
      </div>
       <div className='contactLight'>
          <NavLink to={'/contact'}><button>Contact Me</button></NavLink>
          
          <span className='hamb' >
    <GiHamburgerMenu onClick={handleToggle}/>  
    {showNav? <Nav/>: ''}
          </span>
       </div>
    </Container>
  )
}

export default Header
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    width:100%;
    padding: 0px 150px;
    margin: auto;
    position: fixed;
    top: 0px;
    left: 0px;







    .logo img{
      margin-top: 15px;
      width: 100px;
    }
    @media (max-width:768px){
      padding: 0px 15px;
    }

    .contactLight{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
    }

    .sam{
      font-family: Pacifico;
      font-size: 40px;
      text-shadow:1px 1px 10px  yellowgreen;
      /* color: red; */
    }
    .okolie{
      font-family: Pacifico;
      font-size: 40px;
      text-shadow:1px 1px 10px  yellow;
      padding-top: 120px;
    }

a:hover{
  color: yellowgreen;
}

a.active{
  color: yellow;
  font-size: 20px;
  transition-duration: .7s;
}
button{
  background-color: greenyellow;
  padding: 12px 23px;
  color: black;
  font-weight: 800;
  border-radius: 18px;

  @media (max-width:768px){
    padding: 5px 10px;
    font-weight: 500;
  }
  
}
button:hover{
  color: yellowgreen;
  border: yellowgreen solid 1px;
}
button.active{
  color: yellow;
  background-color: yellowgreen;
  /* font-size: 20px; */
  transition-duration: .7s;
}
 .light{
  font-size: 30px;
  cursor: pointer;
 }
 .hamb{
  font-size: 20px;
  display:none;

  @media (max-width:768px){
    display: flex;
  }

 }
 /* *************************navBar */

@media (min-width:768px){
  .navBar2{
    display: none;
  }
}
.navBar{
  border: 1px solid yellowgreen;
  position: fixed;
  left: 35%;
  bottom: 5%;
  padding: 12px 30px;
  border-radius: 20px;
  

  ul{
    display: flex;
    list-style: none;
    gap: 30px;


    li{
      font-size: 16px;
      color: white;
      transition-duration:.7s;
      cursor: pointer;
    }
    li:hover{
      color: yellowgreen;
      font-size: 20px;
    }
    li:active{
      color: yellow;
      font-size: 20px;
      transition-duration:.7s;
    }
  }
}


/* *****************************navBar2************* */
.none{
  display: none;
}
  @media (max-width:768px){
    .navBar2{
      display: flex;
      position: fixed;
      right: 10px;
      top: 50px;
      opacity: .7;


      ul{
        list-style: none;
        gap: 30px;
      }

      li{
        font-size: 12px;
        text-align: right;
        margin-bottom: 6px;
    }
    li{
      font-size: 14px;
      color: white;
      transition-duration:.7s;
      cursor: pointer;
    }
    li:hover{
      color: yellowgreen;
      font-size: 16px;
    }
    li:active{
      color: yellow;
      font-size: 16px;
      transition-duration:.7s;
    }
  
   
    }
  

  }





@media (max-width:768px){
  .navBar {
    display: none;
  }
}



























































`