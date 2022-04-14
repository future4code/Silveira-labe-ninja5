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
            irParaServicosDetalhe={this.irParaServicosDetalhe}
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
        return <TelaCarrinho mudarTela={this.mudarTela} />;
      default:
        return <Main mudarTela={this.mudarTela} />;
    }
  };

  mudarTela = (nomeTela) => {
    this.setState({ telaAtual: nomeTela });
  };

  irParaServicosDetalhe = (id, nomeTela) => {
    this.setState({ idServico: id, telaAtual: nomeTela });
  };
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
