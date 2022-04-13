import React from 'react'
import styled from 'styled-components'

const PgFooter = styled.footer`
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    align-items: center;
    background-color: #D3D3D3;
    box-shadow: 1px 1px 2px 1px purple;
    padding-left: 32px;
`

export default class Footer extends React.Component {
    render(){
        return(
                 <PgFooter>
                     <p>LabeNinjas</p>
                 </PgFooter>
        )
    }
}