import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <Container>
        <ul>
           <NavLink to ={'/'}><li>Home</li></NavLink>
           <NavLink to={'/about'}><li>About</li></NavLink>
           <NavLink to={'/portfolio'}><li>Portfolio</li></NavLink>
           <NavLink to={'/client'}> <li>Client</li></NavLink>
        </ul>

        <NavLink to={'/contact'}><button>Contact Me</button></NavLink>

    </Container>
  )
}

export default Header
const Container = styled.div`
    /* border-bottom: 1px solid yellowgreen; */
    /* box-shadow: 1px 1px 7px yellowgreen; */
    display: flex;
    justify-content: center;
    height: 60px;
    align-items: center;
    width:80%;
    margin: auto;
    margin-top: 20px;
    

    ul{
      display: flex;
      gap: 30px;
      list-style: none;
      margin-right: 200px;
      
      

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
  margin-left: 150px;
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
    
`