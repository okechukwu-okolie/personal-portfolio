import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container id='home'>
      
      <div className='textDiv'>
      <h6>
        Hey, I'm <span>SAMUEL OKOLIE</span>
      </h6>
      <h5>
        A Software Developer
      </h5>

      </div>
      <div className='imgDiv'>
      <img src="/IMG-2-removebg-preview.png" alt="" />
      </div>
      
      </Container>
  )
}

export default Home

const Container = styled.div`
position:relative;
width: 80%;
margin: auto;
height: calc(100vh - 60px);

    .textDiv{
      float: right;
      span{
        font-size: 50px;
        color: yellow;
      }

      h6{
        font-size: 30px;
        /* margin-bottom: -20px; */
        padding-top: 100px;
      }
      h5{
        font-size: 50px;
      }

    }
  

  
    .imgDiv{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 1px solid yellow;

      img{
        width: 150px;
        border-radius: 50%;
        border: 1px solid yellow;
        object-fit: cover;
      }
    }
  img{
    object-fit: cover;
    width: 600px;
    position: absolute;
    top: -30px;
    right: 0px;
    z-index: -1;

  }
`