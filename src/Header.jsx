import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { MdOutlineLightMode } from "react-icons/md";
const body = document.getElementsByTagName(body)


const Header = () => {
  const [light,setLight]=useState(false);

function changeLight(){
  setLight(!light)
  if (light){
    return(body.style.backgroundColor = 'white', body.style.color = 'black')
  }else{
    alert('hello')
  }
}



  return (
    <Container>
      <span><span className='sam'>S.</span><span className='okolie'>O</span></span>
        <ul>
           <NavLink to ={'/'}><li>Home</li></NavLink>
           <NavLink to={'/about'}><li>About</li></NavLink>
           <NavLink to={'/portfolio'}><li>Portfolio</li></NavLink>
           <NavLink to={'/client'}> <li>Client</li></NavLink>
        </ul>

        <NavLink to={'/contact'}><button>Contact Me</button></NavLink>

        <span className='light'><MdOutlineLightMode  onClick={changeLight} /></span>

    </Container>
  )
}

export default Header
const Container = styled.div`
    /* border-bottom: 1px solid yellowgreen; */
    /* box-shadow: 1px 1px 7px yellowgreen; */
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
    

    

    ul{
      display: flex;
      gap: 30px;
      list-style: none;
      
      
      

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