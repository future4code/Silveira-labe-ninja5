import React, { Component } from 'react';
import Ordenacao from '../Ordenacao/Ordenacao';
import styled from 'styled-components';

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 32px 24px 0px;
`

export default class Filtro extends Component {
  render() {
    return (
      <ContainerFiltro>
        {/* <h3>Filtros</h3> */}
        <label>
          Valor mínimo:
          <input
            value={this.props.minValue}
            onChange={this.props.onChangeMinValue}
            min={0}
            type={"number"}
          />
        </label>
        <label>
          Valor máximo:
          <input
            value={this.props.maxValue}
            onChange={this.props.onChangeMaxValue}
            min={0}
            type={"number"}
          />
        </label>
        <label>
          Busca por nome:
          <input
            value={this.props.titleValue}
            onChange={this.props.onChangeTitleValue}
            type={"text"}
          />
        </label>
        <Ordenacao
          // type={"text"}
          value={this.props.semOrdenacaoValue}
          onChange={this.props.onChangeSemOrdenacaoValue}
        />
      </ContainerFiltro>
    )
  }
}
