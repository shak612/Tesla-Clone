import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';

function Section() {
    return (
        <Wrap>
            <Fade bottom>
            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: not-repeat;
    background-image: url('/images/model-s.jpg');
`
const ItemText = styled.div`
    padding-top: 15vh;

`