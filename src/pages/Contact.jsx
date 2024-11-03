import React from 'react'
import styled from 'styled-components'
import Socials from '../component/Socials'

const Contact = () => {
  return (
    <Container>

      <h1>Contact Me</h1>
      <Socials/>
      <form action="">
        <input type="text" placeholder='Input your name here' />
        <input type="email" placeholder='Input your email here' />
        <textarea name="message" id="" rows='5'  placeholder='Write your message here...'>
          
        </textarea>
        <div>
        <button type='submit' value='send' className='submitBtn'>Click to Submit</button>
        </div>
        <div className='emailWhatsapp'>
          <img src="/email-removebg-preview.png" alt="" />
          <img src="/whatspp-removebg-preview.png" alt="" />
          
        </div>
        
      </form>

    </Container>
  )
}

export default Contact

const  Container =styled.div`

  width: 75%;
  height:450px;
  margin: auto;
  border: none;
  margin-top: 60px;
  /* border: 1px solid red; */
  
  h1{
    text-align: center;
    font-size: 50px;
    margin-bottom: -40px;

  }


  form{
    width: 100%;
    display: flex;
    flex-direction: column;
   
  }
  input{
    width: 100%;
    margin-bottom: 20px;
    height: 40px;
  background-color: #181717;
  border: none;
  }
  textarea{
    width: 100%;
    height: 100px;
    resize: none;
    background-color: #181717;
    border: none;
  }
  div{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  button{
    display: flex;
    align-items: center;
    color: black;
    padding: 8px 15px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
  }

  .socials{
        display: flex;
        justify-content:center;
        gap: 10px;
        width: 100%;
        font-size: 35px;
        margin-bottom: 5px;
        
      }

  @media(max-width:768px){
    margin-top: 100px;
    h1{
      font-size: 30px;
    }
    width: 100%;
    form{
      width: 95%;
      margin: auto;
    }
    input, textarea{
      width: 100%;
    }
    button{
      padding: 5px 10px;
    }
  }

  .emailWhatsapp{
    margin: 0px;

    img{
      width: 30px;
      margin-right: 10px;
      object-fit: cover;
    }
  }
  
`