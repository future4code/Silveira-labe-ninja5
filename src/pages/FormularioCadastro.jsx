import React from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../constantes/urls";
import { HEADERS } from "../constantes/headers";
import { TextField } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
// import { NativeSelect } from "@material-ui/core";
// import Select, { SelectChangeEvent } from '@mui/material/Select';


const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const H1 = styled.h1`
  color: #2e2f52;
`;

const Input = styled.input`
   display: flex;
     
`
const Button = styled.button`
    background-color: #457B9D;
    font-size: 18px;
    color: #F1FAEE;
    margin: 0 5px;
    border-radius: 5px;
`

export default class FormularioCadastro extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    select: [],
    date: "",
  };

  onChangeTitulo = (event) => {
    this.setState({ inputTitulo: event.target.value });
  };
  onChangeDescricao = (event) => {
    this.setState({ inputDescricao: event.target.value });
  };
  onChangePreco = (event) => {
    this.setState({ inputPreco: event.target.value });
  };
  formSelect = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ select: value });
  };
  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  cadastrarServico = async () => {
    const body = {
      title: this.state.inputTitulo,
      description: this.state.inputDescricao,
      price: Number(this.state.inputPreco),
      paymentMethods:this.props.inputPagamento,
      dueDate: this.state.date,
    };
    console.log(body)
    try {
      const res = await axios.post(`${BASE_URL}/jobs`, body, HEADERS);
      console.log(res);
      alert("Serviço cadastrado com sucesso!");
    } catch (err) {
      console.log(err);
      alert("Desculpe, tente novamente.");
    }
  };

  render() {
    console.log(this.props.inputPagamento)
    return (
      <Div>
        <H1>Cadastre o seu serviço</H1>
        <TextField
          type="text"
          placeholder="Digite aqui o serviço"
          id="outlined-basic"
          label="Serviço"
          variant="outlined"
          value={this.state.inputTitulo}
          onChange={this.onChangeTitulo}
        />
        <br></br>
        <TextField
          placeholder="Descreva o serviço"
          id="outlined-basic"
          label="Descrição"
          variant="outlined"
          value={this.state.inputDescricao}
          onChange={this.onChangeDescricao}
        />
        <br></br>
        <TextField
          placeholder="Digite o valor"
          id="outlined-basic"
          label="Valor"
          variant="outlined"
          value={this.state.inputPreco}
          onChange={this.onChangePreco}
        />
        <br></br>
        <FormControl fullWidth>
          <InputLabel
            variant="standard"
            htmlFor="uncontrolled-native"
          ></InputLabel>
          {/* <MultiSelectUnstyled
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </MultiSelectUnstyled> */}
        </FormControl>
        <br></br>
        <div className="check">
          <Input
           
            onChange={this.props.onChangePagamentos}
            value={"debito"}
            type="checkbox"
            id="debito"
            name="debito"
            checked={this.props.inputPagamento.includes("debito")}
          />
          Cartão de Débito
          <Input
            onChange={this.props.onChangePagamentos}
            value={"credito"}
            type="checkbox"
            id="credito"
            name="credito"
            checked={this.props.inputPagamento.includes("credito")}
          />
          Cartão de Crédito
          <Input
            onChange={this.props.onChangePagamentos}
            value={"paypal"}
            type="checkbox"
            id="paypal"
            name="paypal"
            checked={this.props.inputPagamento.includes("paypal")}
          />
          Paypal
          <Input
            onChange={this.props.onChangePagamentos}
            value={"boleto"}
            type="checkbox"
            id="boleto"
            name="boleto"
            checked={this.props.inputPagamento.includes("boleto")}
          />
          Boleto
          <Input
            onChange={this.props.onChangePagamentos}
            value={"pix"}
            type="checkbox"
            id="pix"
            name="pix"
            checked={this.props.inputPagamento.includes("pix")}
          />
          Pix
        </div>
        <br></br>
        <input
          id="date"
          type="date"
          value={this.state.date}
          onChange={this.onChangeDate}
        />
        <br></br>
        <Button onClick={this.cadastrarServico}>Cadastrar Serviço</Button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Div>
    );
  }
}
