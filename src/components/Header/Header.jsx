import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2em;
    background-color: #1D3557;
    box-shadow: 1px 1px 2px 1px #E63946;
    
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1.3em;
    text-decoration: none;
    padding: 5px 20px;
    border: 2px solid #E63946;
    color: #E63946;
    text-shadow: grey 0.1em 0.1em 0.2em;
    border-radius: 5px;
    font-weight: bold;
     
    
`
const P = styled.p`
    font-weight: bold;
    margin-right: 60%;
    color: #E63946;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    padding: 10px 30px;
    border-top: 2px solid #E63946;
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