import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    background-color: #d3d3d3;
    box-shadow: 1px 1px 2px 1px purple;
    
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.3em;
    text-decoration: none;
    padding: 5px 20px;
    border: 2px solid purple;
    color: purple;
    text-shadow: grey 0.1em 0.1em 0.2em;
    border-radius: 5px;
     
    
`
const P = styled.p`
    margin-right: 60%;
    color: purple;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px 30px;
    border-top: 2px solid purple;
    text-shadow: grey 0.1em 0.1em 0.2em;
    border-radius: 5px;

`
export default class Header extends React.Component {
    render(){
        return(
                 <Nav>
                     <P>LabeNinjas</P>
                     <Button onClick={()=>this.props.mudarTela("Home")}>Home</Button>
                     <Button onClick={()=>this.props.mudarTela("TelaCarrinho")}>Carrinho</Button>
                 </Nav>
        )
    }
}