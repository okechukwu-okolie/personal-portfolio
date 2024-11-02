import React from 'react'
import styled from 'styled-components'
import Socials from '../component/Socials'

const Home = () => {
  return (
    <Container id='home'>
      
          <div className='textDiv'>
            <h6> Hey, I'm  </h6>
            <h3>SAMUEL OKOLIE</h3>
           
          <h5>
            A Software Developer
          </h5>
          <Socials/>
          <h4>Tools in my Tool-chest</h4>
          <div  className='stack'>
            
            <img src="/JavaScript.png" alt="" />
            <img src="/TypeScript.png" alt="" />
            <img src="/CSS3.png" alt="" />
            <img src="/Git.png" alt="" />
            <img src="/HTML5.png" alt="" />
            <img src="/MongoDB.png" alt="" />
            <img src="/MySQL.png" alt="" />
            <img src="/Node.js.png" alt="" />
            <img src="/Python.png" alt="" />
            <img src="/React.png" alt="" />
            <img src="/Tailwind CSS.png" alt="" />
            <img src="/vscode.png" alt="" />
            
          </div>

          </div>

          <div className='imgDiv'>
            <img src="/1730466831234.png" alt="" />
          </div>
          
      </Container>
  )
}

export default Home

const Container = styled.div`
padding-top: 50px;
display: flex;
justify-content: space-evenly;
width: 80%;
margin: auto;
height: 100vh;



@media (max-width:768px){
  flex-direction: column;
  align-items: center;

  .textDiv{
    text-align: center;
  }

  .textDiv h3{
    text-shadow: 1px 1px 3px black;
    
  }
  .textDiv h5{
    text-shadow: 1px 1px 3px black;
  }
  .textDiv h6{
    text-shadow: 1px 1px 3px black;
  }

  .imgDiv{
    position: absolute;
    z-index: -1;

   
  }

  
}
    .textDiv{
    

     h3{
        font-size: 50px;
        color: yellow;
      }
      h4{
        font-size: 25px;
        font-weight: 500;
        margin-top: 20px;
      }
      h6{
        font-size: 30px;
        padding-top: 100px;
      }
      h5{
        font-size: 50px;
      }

      .socials{
        display: flex;
        justify-content:center;
        gap: 10px;
        width: 100%;
        font-size: 40px;
        
      }

      @media(max-width:768px){
      h3{
        font-size:35px;
        text-shadow: 3px 3px 3px black;
      }
      h5{
        font-size:40px;
        text-shadow: 3px 3px 3px black;
      }
      h4{
        font-size: 20px;
      }
      h6{
        font-size: 20px;
      }
      .socials{
        display: flex;
        justify-content:center;
        width: 100%;
        font-size: 40px;
        
      }
      
    }
    

    }
    /* @media (max-width:768px){
      img{
        width: 100px;
      }
    } */

    
    .imgDiv{
      

      img{
       
        object-fit: cover;
        width:310px;
      }
    
 
    }
  h4{
    margin: 10px 0px;
    font-size: 30px;
    text-align: center;
  }
  .stack{
    
    display: flex;
    justify-content: space-between;
    /* background-color: #80808087; */
    flex-wrap: wrap;
    width:100%;
    /* gap: 30px; */
  

    img{
      object-fit: cover;
      width: 35px;
    }

    
  }

`