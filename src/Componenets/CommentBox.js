import React from 'react'
import styled from 'styled-components'
import avatar from "../img/avatar-pl.png"

const CommentBoxStyle=styled.div`
    width:60vw;
    height:10vw;
    border-bottom:.2rem solid var(--grn-1);
    display: flex;
    align-items: center;
    margin: 2rem 0;
    img{
        width:5vw;
        height:5vw;
        border-radius:40px;
    }
    .text{
        padding:1rem;
        font-size:1.5rem;
        line-height:2rem;
        margin-left:2rem;
    }
`

export default function CommentBox( {nickname, img, children}) {
    return (
        <CommentBoxStyle>
            <img src={avatar} alt="" />
            <div className="text">
                <div>{nickname}</div> 
                {children}
            </div>
        </CommentBoxStyle>
    )
}
