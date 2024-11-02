import styled from 'styled-components'

const PortfolioCard = ()=>{

    return(
        <Container>
            
            <img src="your-image-url" alt="Portfolio Image"/>
            <h3>Your Project Title</h3>
            <p>Your Project Description</p>
            <a href="your-project-url">Visit Project</a>

         
      

        </Container>
    )
}
export default PortfolioCard

const Container = styled.div`
margin-top: 100px;
    border: 1px solid yellowgreen;
    width: 200px;
    height: 250px;
    border-radius: 20px;
    /* margin-bottom: 20px; */
` 