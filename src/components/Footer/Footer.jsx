import React from 'react'
import styled from 'styled-components'

const PgFooter = styled.footer`
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    text-align: center;
    align-items: center;
    background-color: #A8DADC;
    box-shadow: 1px 1px 2px 1px #E63946;
    padding-left: 32px;
`

export default class Footer extends React.Component {
    render(){
        return(
                 <PgFooter>
                     <p><strong>LabeNinjas</strong></p>
                 </PgFooter>
        )
    }
}