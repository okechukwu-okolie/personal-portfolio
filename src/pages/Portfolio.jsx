import React from 'react'
import styled from 'styled-components'
import PortfolioCard from '../component/PortfolioCard'

const Portfolio = () => {
  return (
    <Container>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
      <PortfolioCard/>
    </Container>
  )
}

export default Portfolio

const Container = styled.div`
width: 80%;
margin: 0 auto;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin-bottom: 70px;
  
`