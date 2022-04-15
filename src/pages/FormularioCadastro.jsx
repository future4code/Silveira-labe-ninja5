import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from '../constantes/urls';
import { HEADERS } from '../constantes/headers';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export default class FormularioCadastro extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    select: [],
    date: "",
  };
  
  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value});
  };
  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  onChangePreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };
  formSelect = (event) => {
    let value = Array.from(event.target.selectedOptions, option => option.value)
    this.setState({ select: value });
  };
  onChangeDate = (event) => {
      this.setState({date:event.target.value})
  
  };

  cadastrarServico = async () => {
    const body = {
        title:this.state.inputTitulo,
        description:this.state.inputDescricao,
        price:Number (this.state.inputPreco),
        paymentMethods:this.state.select,
        dueDate:this.state.date
    }
    try { 
    const res = await axios.post(`${BASE_URL}/jobs`, body, HEADERS);
    console.log(res)
    alert("Serviço cadastrado com sucesso!");
     
    }catch (err){
    console.log(err)
     alert ("Desculpe, tente novamente.")
    }
   
   
  }

  render() {
    return (
      <Div>
        <h1>Casdastre o seu serviço</h1>
          <input placeholder="Título" value={this.state.inputTitulo} onChange={this.onChangeTitulo}></input>
          <input placeholder="Descrição" value={this.state.inputDescricao} onChange={this.onChangeDescricao}></input>
          <input type="number" placeholder="Preço" value={this.state.inputPreco} onChange={this.onChangePreco}></input>
          <select onChange={this.formSelect} value={this.state.select} multiple>
            <option>Cartão de Débito</option>
            <option>Cartão de Crédito</option>
            <option>Cartão de Paypal</option>
            <option>Cartão de Boleto</option>
            <option>Cartão de Pix</option>
          </select>
          <input id="date" type="date" value={this.state.date} onChange={this.onChangeDate}/>
          <button onClick={this.cadastrarServico}>Cadastrar Serviço</button>
      </Div>
    );
  }
}
