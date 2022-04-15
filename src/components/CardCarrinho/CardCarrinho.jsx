import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    align-items: center;
`


export default class CardCarrinho extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <p>{this.props.nomeServico}</p>
          <p>R${this.props.preco},00</p>
          <button onClick={()=> this.props.removerServico(this.props.id)}>Remover</button>
        </Card>
      </div>
    )
  }
}