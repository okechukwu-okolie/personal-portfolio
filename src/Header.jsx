import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MdOutlineLightMode } from "react-icons/md";



const Header = () => {




  return (
    <Container>
      <div className='logo'>
           <span><span className='sam'>S.</span><span className='okolie'>O</span></span>
      </div>
      
       <div className='contactLight'>
          <NavLink to={'/contact'}><button>Contact Me</button></NavLink>
          <span className='light'><MdOutlineLightMode   /></span>
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
    width:80%;
    margin: auto;
    margin-top: 20px;

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
  font-size: 900;
  padding: 12px 23px;
  color: black;
  font-weight: 800;
  /* border: white solid 1px; */
  border-radius: 18px;
  
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
`