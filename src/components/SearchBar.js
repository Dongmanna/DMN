import React from 'react'
import styled from 'styled-components'
import searchIcon from '../img/searchIcon.svg'

const SearchBarStyle = styled.div`
    border: solid var(--grn-1,green) 6px;
    border-radius:40px;
    width:750px;
    height:90px;
    display:flex;
    align-items:center;
    padding-left:3rem;

    input{
        width:37rem;
        height:3rem;
        background-color: transparent;
        font-size: 1.5rem;
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
            height:2.5rem;
            border-right:solid var(--grn-1) 0.25rem;
            margin-right:1rem;
        }
    
    button{
        background-color:transparent;
        border:none;
        cursor:pointer;
        box-shadow: 0.4px -0.4px 4px 0 var(--grn-1);
        padding:0;
        height:50px; ///추후 반응형 고치기
        
        :active{
            box-shadow: -0.6px 0.6px 4px 0 var(--grn-1);
        }
    }
        

`

export default function SearchBar({size}) {
    return (
        <SearchBarStyle>
            <input type="text" placeholder="검색어를 입력해주세요" />
            <div className="after"></div>
            <button type="submit"><img src={searchIcon} alt="" /></button>
        </SearchBarStyle>
    )
}
