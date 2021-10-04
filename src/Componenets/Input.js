import React, { useState } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    
        width: 190px;
        height: 34px;
        border:solid 2px var(--grn-1);
        background-color: transparent;
        font-size: 1.8rem;
        ::placeholder{
            color:var(--gray1);
        }

        :focus{
            outline-width:0;
        }

        :focus::placeholder{
            color: transparent!important;
        }
    
    ${(props)=> props.size==="L" &&`
        width:334px;
        border:solid 1px var(--grn-1);

    `}
`
export default function Input({size, placeholder, required}) {
    placeholder= (required)?"*"+placeholder:placeholder;
    //데이터 결과창에 넘겨줄 때 searchtext활용
    const [text, setText] = useState("");
    const handleText = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }
    return (
        <InputStyle size={size} placeholder={placeholder} value={text} onChange={handleText}>
        
        </InputStyle>
    )
}
