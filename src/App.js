import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import FormularioCadastro from "./pages/FormularioCadastro";
import TelaCarrinho from "./pages/TelaCarrinho";
import TelaServicos from "./pages/TelaServicos";
import TelaServicosDetalhe from "./pages/TelaServicosDetalhe";
import Footer from "./components/Footer/Footer";

export default class App extends React.Component {
  state = {
    telaAtual: "Home",
    idServico: "",

    servicos: [],
    carrinho: []

    inputPagamento: [],
    check: false

  };

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "Home":
        return <Main mudarTela={this.mudarTela} />;
      case "FormularioCadastro":
        return <FormularioCadastro check={this.state.check} onClickCheck={this.onClickCheck} mudarTela={this.mudarTela} onChangePagamentos={this.onChangePagamentos} inputPagamento={this.state.inputPagamento} />;
      case "TelaServicos":
        return (
          <TelaServicos
            mudarTela={this.mudarTela}
            adicionarNoCarrinho={this.adicionarCarrinho}
            irParaServicosDetalhe={this.irParaServicosDetalhe}
            pegarServicos={this.pegarServicos}
          />
        );
      case "TelaServicosDetalhe":
        return (
          <TelaServicosDetalhe
            mudarTela={this.mudarTela}
            idServico={this.state.idServico}
          />
        );
      case "TelaCarrinho":
        return <TelaCarrinho 
            servicos={this.state.servicos}
            mudarTela={this.mudarTela} 
            id={this.state.idServico}
            carrinho ={ this.state.carrinho}
            removerServico ={this.removerServico}
            limparCarrinho = {this.limparCarrinho}
          />;
      default:
        return <Main mudarTela={this.mudarTela} />;
    }
  };

  mudarTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  pegarId = (id) => {
    this.setState({idServico: id})
  }

  pegarServicos = (servicos) => {
    this.setState({servicos: servicos})
  }

  irParaServicosDetalhe = (id, nomeTela) => {
    this.setState({ idServico: id, telaAtual: nomeTela });
  };


  adicionarCarrinho = (servico) => {
    const novoCarrinho = [...this.state.carrinho, servico]
    this.setState({carrinho: novoCarrinho})
  }

  removerServico = (id) => {
    const novoCarrinho = this.state.carrinho.filter((servico)=>{
      return(
        servico.id !== id 
      )
    })
    this.setState({carrinho: novoCarrinho})
  }

  limparCarrinho = () =>{
    this.setState({carrinho: []})
    

  }

  render() {
    

  onChangePagamentos = (event) =>{
    
    if (!this.state.inputPagamento.includes(event.target.value))
    {const newInputPagamento = [...this.state.inputPagamento]
      newInputPagamento.push(event.target.value)
      this.setState({inputPagamento: newInputPagamento})
    }else{
      const newInputPagamento = this.state.inputPagamento.filter((Pagamento)=> Pagamento !== event.target.value )
      this.setState({inputPagamento: newInputPagamento})
    }
     
    console.log(event.target.value)
  }
  
  render() {
    console.log(this.state.inputPagamento)
    return (
      <div>
        <Header mudarTela={this.mudarTela} />
        {this.escolherTela()}
        <Footer mudarTela={this.mudarTela} />
      </div>
    );
  }
}
