import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 100vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    
`
const H1 = styled.h1`
    color: #2e2f52;
    font-size: 35px;
    border-bottom: 3px solid #b708b7;
    border-radius: 5px;
`
const P = styled.p`
    font-size: 20px;
    padding: 20px 10px;
    
`
const Button = styled.button`
    background-color: #b708b7;
    font-size: 18px;
    color: whitesmoke;
    margin: 0 5px;
    border-radius: 5px;
`
export default class Main extends React.Component {
    render (){
        return (
            <Div>
                <H1>LabeNinjas</H1>
                <P>O talento certo no momento certo!</P>
                <div>
                    <Button onClick={()=>this.props.mudarTela("FormularioCadastro")}>Quero ser um Ninja</Button>
                    <Button onClick={()=>this.props.mudarTela("TelaServicos")}>Contratar um Ninja</Button>
                </div>
            </Div>
        )
    }

}
