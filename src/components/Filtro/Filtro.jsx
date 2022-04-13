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

export class Filtro extends Component {
  render() {
    return (
      <ContainerFiltro>
        {/* <h3>Filtros</h3> */}
        <label>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minValue}
            onChange={this.props.onChangeMinValue}
          />
        </label>
        <label>
          Valor máximo: 
          <input
            type="number"
            value={this.props.maxValue}
            onChange={this.props.onChangeMaxValue}
          />
        </label>
        <label>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameValue}
            onChange={this.props.onChangeNameValue}
          />
        </label>
          <Ordenacao>
            type="text"
            value={this.props.semOrdenacaoValue}
            onChange={this.props.onChangesemOrdenacaoValue}
          </Ordenacao>
      </ContainerFiltro>
    )
  }
}
