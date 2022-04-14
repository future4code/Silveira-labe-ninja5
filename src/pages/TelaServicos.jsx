import React from 'react';
import axios from 'axios';
import styled from "styled-components";
import { BASE_URL } from '../constantes/urls';
import { HEADERS } from "../constantes/headers";
import CardServico from '../components/CardServico/CardServico';
import Filtro from '../components/Filtro/Filtro'
// import Button from '@material-ui/core/Button';

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
    minFilter: "",
    maxFilter: "",
    titleFilter: "",
    sort: "CRESCENTE"
  }

  componentDidMount() {
    this.pegaTodosServicos();
  }

  pegaTodosServicos = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/jobs`, HEADERS);
      this.setState({ servicos: res.data.jobs });
      this.props.pegarServicos(this.state.servicos);
    } catch (error) {
      alert(
        "Não foi possível carregar as informações solicitadas. Tente novamente mais tarde!"
      );
    }
  }

  render(){

    const listaServicos = this.state.servicos
    .map((servico) => {
      return (
        <CardServico
          pegarServico={servico}
          key={servico.id}
          nome={servico.title}
          preco={servico.price}
          data={servico.dueDate}
          onClick={()=>{this.props.irParaServicosDetalhe(servico.id,"TelaServicosDetalhe")}}
          adicionarNoCarrinho={this.props.adicionarNoCarrinho}
        />
      );
  onChangeMinFilter = (event) => this.setState({ minFilter: event.target.value });
  onChangeMaxFilter = (event) => this.setState({ maxFilter: event.target.value });
  onChangeTitleFilter = (event) => this.setState({ titleFilter: event.target.value });
  onChangeSelectFilter = (event) => this.setState({ sort: event.target.value });

  filterServices = () => {
    const servicosFiltradoMin = this.state.servicos.filter((servico) => {
      return this.state.minFilter ? servico.price >= this.state.minFilter : servico
    });

    const servicosFiltradoMax = servicosFiltradoMin.filter((servico) => {
      return this.state.maxFilter ? servico.price <= this.state.maxFilter : servico
    });

    const servicosFiltradoTitle = servicosFiltradoMax.filter((servico) => {
      return servico.title.toLowerCase().includes(this.state.titleFilter.toLowerCase())

    });

    return servicosFiltradoTitle

  }

  render() {
    const servicosOrdenados = this.state.servicos &&
      this.state.servicos.sort((a, b) => {
        return this.state.sort === 'CRESCENTE' ? a.price - b.price :
          this.state.sort === 'DECRESCENTE' ? b.price - a.price :
            this.state.sort === 'PRAZO' ? (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()) :
              this.state.sort === 'TITULO' ? a.title.toLowerCase().localeCompare(b.title.toLowerCase()) :
                this.state.sort === 'SEMORDEM' ? a.price : b.price
      })

    const servicosFiltrados = this.filterServices()
    console.log(servicosFiltrados)

    const listaServicos = servicosFiltrados &&
      servicosFiltrados.map((servico) => {
        return (
          <CardServico
            servicos={servicosFiltrados}
            key={servico.id}
            nome={servico.title}
            preco={servico.price}
            data={servico.dueDate}
            onClick={() => { this.props.irParaServicosDetalhe(servico.id, "TelaServicosDetalhe") }}
          />
        );
      });

    return (
      <div>
        <Filtro
          minValue={this.state.minFilter}
          maxValue={this.state.maxFilter}
          titleValue={this.state.titleFilter}
          semOrdenacaoValue={this.state.semOrdenacaoFilter}
          onChangeMinValue={this.onChangeMinFilter}
          onChangeMaxValue={this.onChangeMaxFilter}
          onChangeTitleValue={this.onChangeTitleFilter}
          onChangeSemOrdenacaoValue={this.onChangeSelectFilter}
        />

        <ContainerGrid >
          {listaServicos}
        </ContainerGrid>

      </div>
    )
  }
}
