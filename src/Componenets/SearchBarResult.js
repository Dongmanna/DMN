import React, { useState } from 'react'
import styled from 'styled-components'
import searchIconBlack from '../img/searchIconBlack.svg'
const SearchBarResultStyle=styled.div`

display:flex;
align-items: center;
    input{
        margin-left:2rem;
        width: 643px;
        height: 77px;
        border:solid 2px;
        border-radius: 3px;
        background-color: transparent;
        font-size: 2rem;
        padding-left:4rem;
      ::placeholder{
            color:var(--gray1);
        }

        :focus{
            outline-width:0;
        }

        :focus::placeholder{
            color: transparent!important;
        }
        
    }
    button{
        font-weight: bold;
        font-size: 1.6rem;
        width:140px;
        height:55px;
        background-color: #fff;
        border:solid 2px;
        box-shadow: 0.8px -0.8px 4px 0 var(--gray1) ;
        margin-left:4rem;
        text-align: right;
        padding-right:3rem;
        :active{
        box-shadow: -1px 1px 4px 0 var(--gray1) ;
    }
        }
    `
export default function SearchBarResult({searchText, setSearchText}) {
    const [inputText, setInputText] = useState("")
    
    //데이터 결과창에 넘겨줄 때 searchtext사용

    const handleSearch = (e) => {
        e.preventDefault();
        setInputText(e.target.value);
    }
    const onclick= ()=>{
        setSearchText(inputText)
    }
    return (
        <SearchBarResultStyle>
            <form >
            <img src={searchIconBlack}alt="검색" />
            <input type="text" placeholder="검색어를 입력해주세요" value={inputText} onChange={handleSearch}/>
            <button type="submit" onClick={onclick}>검색</button>
            </form>
        </SearchBarResultStyle>
    )
}
