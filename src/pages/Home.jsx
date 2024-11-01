import React from 'react'
import styled from 'styled-components'
import Socials from '../component/Socials'

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
          <Socials/>

          </div>
          <div className='imgDiv'>
            <img src="/1730466831234.png" alt="" />
          </div>
          
      </Container>
  )
}

export default Home

const Container = styled.div`
position:relative;
width: 80%;
margin: auto;
height: 100vh;

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
      position: absolute;
      left: 50%;

      img{
      
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