import React, { Component } from 'react';
// import styled from 'styled-components'


export default class Ordenacao extends React.Component {
    state = {
        sort: "CRESCENTE"
    }
      
    getFilteredList = () => {
        return this.props.products
        .filter((obj) => this.props.maxValue === "" || obj.valor <= this.props.maxValue)
        .filter((obj) => this.props.minValue === "" ||  obj.valor >= this.props.minValue)
        .filter((obj) => obj.titulo.toLowerCase().includes(this.props.tituloValue.toLowerCase()))
        .sort((a, b) => 
            this.state.sort === 'CRESCENTE' ? a.valor - b.valor : 
            this.state.sort === 'DECRESCENTE' ? b.valor - a.valor : 
            this.state.sort === 'PRAZO' ? a.prazo - b.prazo : 
            this.state.sort === 'TITULO' ? a.titulo - b.titulo : null) 
    }

    onChangeSelect = (event) => this.setState({sort: event.target.value});

    render(){
        // const {semOrdenacao: valor} = this.props
        // const filteredList = this.getFilteredList();
        return(
            <label className="semOrdenacao">Ordenacao:
                <select 
                    value={this.state.sort}
                    onChange={this.onChangeSelect}>
                    <option value="valorMax">Valor Max</option>
                    <option value="valorMin">Valor Min</option>
                    <option value="titulo">Título</option>
                    <option value="prazo">Prazo</option>
                </select>

            </label>
        )
    }
}