import React from 'react'
//import styled from 'styled-components'
import { Filtro } from '../components/Filtro/Filtro'

export default class TelaServicos extends React.Component {
   state = {
        minValue: "",
        maxValue: "",
        tituloValue: "",
        semOrdenacao: "",
    }


    onChangeMinValue = (event) => this.setState({minValue: event.target.value});
    onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
    onChangeTituloValue = (event) => this.setState({tituloValue: event.target.value});
    onChangeOrdenacaoValue = (event) => this.setState({semOrdenacaoValue: event.target.value});

    render(){
        return(
            <div>
                <Filtro>
                    minValue={this.state.minValue}
                    maxValue={this.state.maxValue}
                    nameValue={this.state.tituloValue}
                    semOrdenacao={this.state.semOrdenacao}
                    onChangeMinValue={this.onChangeMinValue}
                    onChangeMaxValue={this.onChangeMaxValue}
                    onChangeNameValue={this.onChangeTituloValue}
                    onChangeOrdenacaoValue={this.onChangeOrdenacaoValue}
                </Filtro>

                
            </div>
        )
    }
}