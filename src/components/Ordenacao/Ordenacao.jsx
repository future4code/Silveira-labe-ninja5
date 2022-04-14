import React from 'react';
// import styled from 'styled-components'

export default class Ordenacao extends React.Component {

    render() {
        return (
            <label className="semOrdenacao">Ordenacao:
                <select
                    value={this.props.sort}
                    onChange={this.props.onChange}>
                    <option value={"SEMORDEM"}>Sem Ordenação</option>
                    <option value={"CRESCENTE"}>Valor Min</option>
                    <option value={"DECRESCENTE"}>Valor Max</option>
                    <option value={"TITULO"}>Título</option>
                    <option value={"PRAZO"}>Prazo</option>
                </select>
            </label>
        )
    }
}