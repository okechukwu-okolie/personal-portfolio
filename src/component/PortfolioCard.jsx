import styled from 'styled-components'

const PortfolioCard = ()=>{

    return(
        <Container>
            
            <img src="your-image-url" alt="Portfolio Image"/>
            <h3>Your Project Title</h3>
            <p>Your Project Description</p>
            <a href="your-project-url">Visit Project</a>

            {/* Add your other project details here */}

            {/* Add a button to open your project in a new tab */}
            <button onClick={()=>window.open('your-project-url', '_blank')}>Open in New Tab</button>

            {/* Add a button to download your project */}
      

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