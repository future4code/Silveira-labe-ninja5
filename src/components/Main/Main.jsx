import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    
   
`

export default class Main extends React.Component {
    render (){
        return (
            <Div>
                <h1>LabeNinjas</h1>
                <p>O talento certo no momento certo!</p>
                <div>
                    <button onClick={()=>this.props.mudarTela("FormularioCadastro")}>Quero ser um Ninja</button>
                    <button onClick={()=>this.props.mudarTela("TelaServicos")}>Contratar um Ninja</button>
                </div>
            </Div>
        )
    }

}
