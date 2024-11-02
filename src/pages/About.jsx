import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>

    <div className='imgDiv'>
      <img src="/1730466831258.png" alt="" />
    </div>
    <div className='textDiv'>
      <h2>
        ABOUT ME
      </h2>
      <h3>
        I am a passionate <span>FULL STACK DEVELOPER</span> also with formal training  
        in Electrical Electronics Engineering.
        <br />
        I am passionate about developing software based solutions tailored to address clients and users pain-points and 
        maximise users interaction.
        <br />
        I am objective centered, goal driven and a lover of good music and food.
      </h3>
      <br />
      <a href="/">More about Me</a>
    </div>
    
    </Container>
  )
}

export default About

const Container = styled.div`
padding-top: 30px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: calc(100vh-70px); */

  @media(max-width:768px){
    display: block;
  }
  

  .textDiv{
    width: 570px;
    font-family: Monserrat;
    color: #f0eeee;

    

    span{
      font-size: 22px;
      margin: 0px 5px;
      font-weight: 600;
      color: yellowgreen;
    }
    h2{
      font-size: 50px;
      color: yellowgreen;
      margin-bottom: 30px;
      text-shadow: 1px 1px 1px white;
    }
    h3{
      font-size: 17px;
      font-weight: 200;
    }
  
  }
  @media(max-width:768px){
    .textDiv{
     position: absolute;
     top: 35%;
     width: 90%;
     background-color: #8080805d;
     

     h2{
      font-size: 20px;
     }
     h3{
      font-size: 12px;
      font-weight: 500;
     }
     span{
      font-size: 12px;
     }
      
    }
  }

  .imgDiv{
    
    img{
      width: 270px;
      margin-top:10px;
      object-fit: cover;
      border-bottom-left-radius: 30%;
      
    }

    a{
      color: yellowgreen;
    }

  }
  `