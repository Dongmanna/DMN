import React from 'react'
import styled from 'styled-components'

export default function ButtonGray({children}) {
    const ButtonGrayStyle=styled.button`
    width: 8rem;
    height: 3rem;
    border: 1px solid #B9B9B9;
    border-radius: 5px;
    font-size:1.4rem;
    background-color: #fff;
    color:#B9B9B9;
    :hover{
        box-shadow: 1px 1px 7px ;
    }
    box-shadow: 0.4px -0.4px 4px ;
    :active{
        box-shadow: -0.6px 0.6px 4px ;
    }
    
    `

    return (
        <ButtonGrayStyle>
            {children}
        </ButtonGrayStyle>
    )
}
