import styled from 'styled-components'
import { MdFacebook } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";     




import React from 'react'

const Socials = () => {
  return (
    <Container>

        <div className='socials'>
            <a href="/" target='_blank'>< MdFacebook /></a>
           <a href="/" target='_blank'><FaSquareXTwitter /></a> 
            <a href="/" target='_blank' ><FaLinkedin /></a>
            <a href="/" target='_blank'><FaInstagramSquare /></a>
        </div>
         
    </Container>
  )
}

export default Socials
const Container = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    

    div{
    /* width: 100%; */
    /* background-color: yellow; */
    height: 30px;
    }
   .socials{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    

   }
   
  
    

    
    
`