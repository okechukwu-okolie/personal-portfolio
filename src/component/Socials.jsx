import styled from 'styled-components'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";     




import React from 'react'

const Socials = () => {
  return (
    <Container>
        
            <div><FaFacebook /></div>
            <div><FaSquareXTwitter /></div>
            <div><FaLinkedin /></div>
            <div><FaInstagramSquare /></div>
        
        
        
    </Container>
  )
}

export default Socials
const Container = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 35%;
    
    div{
        font-size: 30px;
        padding: 0;
    
    }
    div:hover {
        width: 90px;
        background-color: grey;
        border-radius: 20px;
        
    }
  
    

    
    
`