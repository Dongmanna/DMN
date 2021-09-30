import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonGreenAStyle = styled.button`
    position:relative;
    p{
        z-index:3;
    }
    &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => props.phase===1?0:200}px;
    height: 64px;
    background-color: var(--grn-2);
    transition:1.5s;
    z-index: -1;
    }
    &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: ${(props) => props.phase===1?200:0}px;
    height: 64px;
    background-color: var(--grn-1);
    transition:1.5s;
    z-index: -2;
    }

    width:200px;
    height:64px;
    color:#fff;
    font-size:2rem;
    border:none;
    cursor: pointer;
    z-index:1;
    :hover{
        box-shadow: 2px 2px 7px 0 var(--grn-2);
    }
    box-shadow: 0.4px -0.4px 4px 0 var(--grn-2);
    :active{
        box-shadow: -0.8px 0.8px 4px 0 var(--grn-2);
    }
    

    

`

export default function ButtonGreenA({children, function1, function2, secondText}) {
    const [phase, setPhase] = useState(1)
    return (
        // <ButtonGreenAStyle phase={phase}      onClick={phase===1?()=>{setPhase(0);function1()}:()=>{function2} > 실제 사용시
        <ButtonGreenAStyle phase={phase}      onClick={phase===1?()=>{setPhase(2);}:()=>{setPhase(1)}} > {/* 콜백으로 넘기기 */}
            <p>{phase===1?children:secondText}</p>

        </ButtonGreenAStyle>
    )
}