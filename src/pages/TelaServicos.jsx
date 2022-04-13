import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import { BASE_URL } from '../constantes/urls';
import { HEADERS } from "../constantes/headers";

import CardServico from '../components/CardServico/CardServico';
import Filtro from '../components/Filtro/Filtro'

import Button from '@material-ui/core/Button';


const ContainerGrid = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
  padding: 20px;
`;


export default class TelaServicos extends React.Component {

  state = {
    servicos: [],
    minValue: "",
    maxValue: "",
    tituloValue: "",
    semOrdenacao: "",
  }

  componentDidMount() {
    this.pegaTodosServicos();
  }

  pegaTodosServicos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, HEADERS);
      this.setState({ servicos: res.data.jobs });
    } catch (error) {
      alert(
        "Não foi possível carregar as informações solicitadas. Tente novamente mais tarde!"
      );
    }
  }

  onChangeMinValue = (event) => this.setState({minValue: event.target.value});
  onChangeMaxValue = (event) => this.setState({maxValue: event.target.value});
  onChangeTituloValue = (event) => this.setState({tituloValue: event.target.value});
  onChangeOrdenacaoValue = (event) => this.setState({semOrdenacaoValue: event.target.value});

  render(){

    const listaServicos = this.state.servicos
    .map((servico) => {
      return (
        <CardServico
          key={servico.id}
          nome={servico.title}
          preco={servico.price}
          data={servico.dueDate}
          onClick={()=>{this.props.irParaServicosDetalhe(servico.id,"TelaServicosDetalhe")}}
        />
      );
    });

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

            <ContainerGrid>{listaServicos}</ContainerGrid>

        </div>
    )
  }
}
