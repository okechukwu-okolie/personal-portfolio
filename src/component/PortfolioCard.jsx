import styled from 'styled-components'

const PortfolioCard = (props)=>{

    return(
        <Container>
            
            <img className='cardImg' src={props.cardImg} alt="Portfolio Image"/>
            <div >
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.git} target='_blank'>GitHub link <img src="/GitHub.png" alt="" /></a> <br />
                <a href={props.vercel} target='_blank'>Vercel link <img src="/Vercel.png" alt="" /></a>
            </div>
            

         
      

        </Container>
    )
}
export default PortfolioCard

const Container = styled.div`
    margin-top: 100px;
    border: 1px solid yellowgreen;
    width: 300px;
    height: 300px;
    border-bottom-right-radius: 30px;
    border-top-left-radius: 30px;
    background-color: #757070;

    .cardImg{
        object-fit: cover;
        width: 100%;
        
    }

    a img{
        width: 20px;
        height: 20px;
    }
    div{
        padding-left: 10px;
        padding-right: 10px;
    }

    /* @media(max-width:768px){
        width: 300px;
        height: 200px;
        border-radius: 0px;
        margin-top: 50px;
    } */
` 