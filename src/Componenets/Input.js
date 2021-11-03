import React, { useState } from 'react'
import styled from 'styled-components'

const InputStyle = styled.input`
    
        width: 15vw;
        height: 3rem;
        border:solid 2px var(--grn-1);
        border-radius: 3px;
        background-color: transparent;
        font-size: 1.8rem;
        ::placeholder{
            color:black;
        }

        :focus{
            outline-width:0;
            border:solid 3px var(--grn-1);

        }

        :focus::placeholder{
            color: transparent!important;
        }
    
    ${(props)=> props.size==="L" &&`
        width:22vw;
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
