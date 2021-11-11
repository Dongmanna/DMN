import React from 'react'
import styled from 'styled-components'

export default function ButtonWhite({children}) {
    const ButtonWhiteStyle=styled.button`
    width: 12rem;
    max-width:12vw;
    margin: 0 1rem;
    height: 3rem;  
    background: #FFFFFF;
    border: 2px solid var(--grn-1); 
    font-size:1.5rem;
    transition:.4s;
    :hover{
        background-color: var(--grn-1);
        color:#fff;
        border:none;
    }
    box-shadow: 0.4px -0.4px 4px 0 var(--gray1) ;
    :active{
        box-shadow: -0.8px 0.8px 4px 0 var(--gray1) ;
    }
    `
    return (
        <ButtonWhiteStyle>
            {children}
        </ButtonWhiteStyle>
    )
}
