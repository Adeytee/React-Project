import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex
`
const CardBox = styled.div`
    width: 150px;
    height: 150px;
    margin: 1em;
    padding: 1em;
    background: gray;
    color: white;
`

const Card = () => {
  return (
    <CardContainer>
        <CardBox>
            <h2> Id </h2>
            <h1> Title </h1>
            <p> Body </p>
        </CardBox>
    </CardContainer>
  )
}

export default Card