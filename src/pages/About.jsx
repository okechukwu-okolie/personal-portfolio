import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>

    <div className='imgDiv'>
      <img src="/public/IMG-20190804-WA0009-removebg-preview.png" alt="" />
    </div>
    <div className='textDiv'>
      <h2>
        ABOUT ME
      </h2>
      <h3>
        I am a passionate <span>FULL STACK DEVELOPER</span> also with formal training  
        in Electrical Electronics Engineering.
        <br /><br />
        I am passionate about developing software based solutions tailored to address clients and users pain-points and 
        maximise users interaction.
        <br /><br />
        I am objective centered, goal driven and a lover of good music and food.
      </h3>
      <br /><br /><br />
      <a href="#">More about Me</a>
    </div>
    
    </Container>
  )
}

export default About

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(100vh-70px);
  

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
      margin-bottom: 50px;
    }
    h3{
      font-size: 18px;
      font-weight: 200;
    }
  }

  .imgDiv{
    
    img{
      width: 350px;
      margin-top:-80px;
      border-bottom-left-radius: 30%;
      /* box-shadow: ; */
      opacity: .7;
    }

    a{
      color: yellowgreen;
    }

  }
  `