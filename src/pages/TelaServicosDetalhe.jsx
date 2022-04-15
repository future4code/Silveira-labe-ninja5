import React from 'react';
import axios from 'axios';
import styled from "styled-components";

import { BASE_URL } from '../constantes/urls';
import { HEADERS } from "../constantes/headers";


const ContainerFlex = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export default class TelaServicos extends React.Component {
 
  state = {
    servico: "",
    pagamentos: [],
    prazo: "",
    preco: 0, 
    tituloServico: ""
  }

  componentDidMount(){
    this.pegaDetalhesServico();
  }

  pegaDetalhesServico = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs/${this.props.idServico}`, HEADERS);
      this.setState({ 
          tituloServico: res.data.title,
          servico: res.data.description,
          pagamentos: res.data.paymentMethods,
          prazo: res.data.dueDate,
          preco: res.data.price, 
      });
    } catch (error) {
      alert(
        "Não foi possível carregar as informações solicitadas. Tente novamente mais tarde!"
      );
    }
  };


  render() {

    const componentesPagamentos = this.state.pagamentos.map((pagamento) => {
      return <li>{pagamento}</li>
    });

    /*  */

    return (
      <ContainerFlex>
        <h2>{this.state.tituloServico}</h2>
        <p>Preço: R${this.state.preco.toFixed(2)}</p>
        <p>Prazo: {(new Date(this.state.prazo)).toLocaleDateString()}</p>        
        <p>Serviço: {this.state.servico}</p>        
        <p>Formas de Pagamento:</p>
        <ul>
          {componentesPagamentos}
        </ul>
        <button onClick={()=>{this.props.mudarTela("TelaServicos")}}>Voltar para a Lista</button>
        <p>{console.log(this.state.detalhesServico)}</p>
      </ContainerFlex>
    );
  }
}