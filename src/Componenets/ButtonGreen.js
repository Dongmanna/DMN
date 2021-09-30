import React from 'react'
import styled from 'styled-components'

const ButtonGreenStyle = styled.button`
    width:200px;
    height:64px;
    background-color: var(--grn-1);
    color:#fff;
    font-size:2rem;
    border:none;
    cursor: pointer;
    :hover{
        background-color: var(--grn-2);
    }
    box-shadow: 0.4px -0.4px 4px 0 var(--grn-2);
    :active{
        box-shadow: -0.8px 0.8px 4px 0 var(--grn-2);
    }

`

export default function ButtonGreen({children}) {
    return (
        <ButtonGreenStyle>
            {children}

        </ButtonGreenStyle>
    )
}
