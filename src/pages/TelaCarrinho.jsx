import React from 'react'
import CardCarrinho from '../components/CardCarrinho/CardCarrinho'
// import axios from 'axios';
import styled from "styled-components";
// import { BASE_URL } from '../constantes/urls';
// import { HEADERS } from "../constantes/headers";

const Div = styled.div`
    display: flex;
    flex-direction: column;
`

const Descricao = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  align-items: center;
`

export default class TelaCarrinho extends React.Component {
  state = {
    servicos: this.props.servicos
  }

  render() {
    let listaDeCarrinho = this.props.carrinho.map((servico) => {
        console.log(this.props.carrinho)
      return(
        <CardCarrinho
            key={servico.id}
            id={servico.id}
            preco={servico.price}
            nomeServico={servico.title}
            removerServico={this.props.removerServico}
        />
      )
    }) 

    const valorTotal = this.props.carrinho.reduce((valorAnterior, servico) => {
      return(
        valorAnterior + servico.price
      )
    },0)

    return (
      <Div>
        {listaDeCarrinho}
        <Descricao>
          <p>Valor Total: R${valorTotal.toFixed(2)}</p>
          <button onClick={this.props.limparCarrinho}>Finalizar Compra</button>
          <button onClick={()=>this.props.mudarTela('TelaServicos')}>Voltar para a Lista</button>
        </Descricao>
      </Div>
    )
  }
}