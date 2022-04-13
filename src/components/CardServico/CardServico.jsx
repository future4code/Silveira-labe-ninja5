import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  border: 1px solid black;
  background-color: #ccc;
  padding: 20px;
`;

const Titulo = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const Paragrafo = styled.p`
  font-weight: bold;
  span{
    font-weight: lighter;
  }
`;


export default class CardServico extends Component {

  render() {
    return (
      <Container>
        <Titulo>{this.props.nome}</Titulo>
        <Paragrafo>Preço: <span>R${this.props.preco.toFixed(2)}</span></Paragrafo>
        <Paragrafo>Prazo: <span>{(new Date(this.props.data)).toLocaleDateString()}</span></Paragrafo>
        <button onClick={this.props.onClick}>Ver detalhes</button>
        <button>Adicionar no Carrinho</button>
      </Container>
    )
  }
}
