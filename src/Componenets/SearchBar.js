import React, { useState } from 'react'
import styled from 'styled-components'
import searchIcon from '../img/searchIcon.svg'

const SearchBarStyle = styled.div`
    border: solid var(--grn-1,green) 6px;
    border-radius:40px;
    width:750px;
    height:90px;
    display:flex;
    align-items:center;
    padding-left:4.5rem;

    input{
        width:58rem;
        height:4.5rem;
        background-color: transparent;
        font-size: 3rem;
        border:none;
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

    .after{
            height:4rem;
            border-right:solid var(--grn-1) 0.3rem;
            margin-right:1.5rem;
        }
    
    button{
        background-color:transparent;
        border:none;
        cursor:pointer;
        padding:0;
        height:50px; ///추후 반응형 고치기
        box-shadow: 0.4px -0.4px 4px 0 var(--grn-1);
        :active{
            box-shadow: -0.8px 0.8px 4px 0 var(--grn-1);
        }
    }
    
    ${(props) =>
    props.size==="S" &&`          
        
    border: solid var(--grn-1,green) 3px;
    width:320px;
    height:40px;
    padding-left:2rem;

    .after{
            height:1.5rem;
            border-right:solid var(--grn-1) 0.18rem;
            margin-right:1rem;
        }

    input{
        width:24rem;
        height:1.5rem;
        background-color: transparent;
        font-size: 1.5rem;
        border:none;
        }
    img{
        width:2rem;
    }
    button{
        height:2rem;
    }
    `}

`


export default function SearchBar({size, onclick}) {

    //데이터 결과창에 넘겨줄 때 searchtext사용
    const [searchText, setsearchText] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setsearchText(e.target.value);
    }
    
    

    return (
        <SearchBarStyle size={size}>
            <input type="text" placeholder="검색어를 입력해주세요" value={searchText} onChange={handleSearch}/>
            <div className="after"></div>
            <button type="submit" onClick={onclick}><img src={searchIcon} alt="검색" /></button>
        </SearchBarStyle>
    )
}
