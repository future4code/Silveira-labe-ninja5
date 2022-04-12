import React from 'react'



export default class Main extends React.Component {
    render (){
        return (
            <div>
                <h1>LabeNinjas</h1>
                <p>O talento certo no momento certo</p>
                <button onClick={()=>this.props.mudarTela("FormularioCadastro")}>Quero ser um Ninja</button>
                <button onClick={()=>this.props.mudarTela("TelaServicos")}>Contratar um Ninja</button>
            </div>
        )
    }

}
