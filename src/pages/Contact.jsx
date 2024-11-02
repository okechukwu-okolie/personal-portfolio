import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container>

      <h1>Contact Me</h1>
      <form action="">
        <input type="text" placeholder='Input your name here' />
        <input type="email" placeholder='Input your email here' />
        <textarea name="" id="" placeholder='Write your message here...'>
          
        </textarea>
        <div>
        <button>Click to Submit</button>
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

  width: 59%;
  height:450px;
  margin: auto;
  border: none;
  
  h1{
    text-align: center;
    font-size: 50px;
    margin-bottom: 30px;

  }


  form{
    width: 800px;
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
    margin-bottom: 20px;
    resize: none;
    padding: 10px;
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
    

    img{
      width: 40px;
      margin-right: 10px;
      object-fit: cover;
    }
  }
  
`