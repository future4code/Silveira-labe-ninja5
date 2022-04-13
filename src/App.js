import React from 'react'
import Header from './components/Header/Header'
import styled from 'styled-components'
import Main from './components/Main/Main'
import FormularioCadastro from'./pages/FormularioCadastro'
import TelaCarrinho from'./pages/TelaCarrinho'
import TelaServicos from'./pages/TelaServicos'
import TelaServicosDetalhe from'./pages/TelaServicosDetalhe'


export default class App extends React.Component {
	state = {
		telaAtual:"Home"
	};
	componentDidMount(){
		console.log(`Home`)
	}
	escolherTela = () => {
		switch (this.state.telaAtual) {
		  case "Home":
			return <Main mudarTela={this.mudarTela}/>;
		  case "FormularioCadastro":
			return <FormularioCadastro mudarTela={this.mudarTela}/>;
		  case "TelaServicos":
			return <TelaServicos mudarTela={this.mudarTela}/>;
			case "TelaServicosDetalhe":
			return <TelaServicosDetalhe mudarTela={this.mudarTela}/>;	
			case "TelaCarrinho":
			return <TelaCarrinho mudarTela={this.mudarTela}/>;	
		  default:
			return <Main mudarTela={this.mudarTela}/>;
		}
	  };

	mudarTela = (nomeTela) => {
		this.setState({telaAtual:nomeTela})
	}
	render(){
		return(
			<div>
				<Header mudarTela={this.mudarTela}/>
				{this.escolherTela()}
			</div>
		)
	}
}
	

