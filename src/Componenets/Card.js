import React from 'react'
import styled from 'styled-components'


const CardStyle=styled.div`
    width:30%;
    margin-right:3%;
    height:240px;
    background-color:#fff;
    position:relative;
    color:black;
    .red-sign{
        background-color: var(--hred);
        width: 91px;
        height: 26px;
        color:#fff;
        text-align: center;
        line-height:26px;
        z-index:1;
        position:absolute;
        
    }
    .card{
        background-color: var(--bg-gray);
        width: 100%;
        height: 66%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position:absolute;
        top:11px;
        left:0;
        display:flex;
        :hover{
            /* box-shadow: 4px 4px 4px 0 var(--gray1) ; */
            transform: translate(-0.4rem,-0.4rem);
            width:102%;
            height:68%;
            transition:.1s;

        }
    }
    .title{
        font-family: 'NIXGONM-Vb';
        position:absolute;
        top:160px;
        font-family: NIXGONFONTS V2.0;
        font-size: 2rem;
        line-height: 2.6rem;
        line-break: break-all;
        overflow:hidden;
        text-overflow:ellipsis;
        /* display: block;
        max-height:4rem; */
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        margin-left:0.5rem;
    }
    .container{
        font-family: 'NIXGONM-Vb';

        position:absolute;
        height:100%;
        right:0;
        width:50%;
        padding:2rem;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        p{
        height:3rem;
        font-family: NIXGONFONTS V2.0;
        font-size: 1.4rem;
        line-height: 1.5rem;
        line-break: break-all;
        overflow:hidden;
        text-overflow:ellipsis;
        /* display: block;
        max-height:4rem; */
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        }
    }
    img{
        margin:auto 0;
        margin-left: 1.5rem;
        width: 154px;
        height: 120px;
        border:solid var(--grn-1) 1px;
        border-radius:5px;
        background-color: #fff;
    }
    .category{
        border-radius:40px;
        background-color: #fff;
        text-align: center;
        position:absolute;
        right:10px;
        bottom:10px;
        height:4rem;
        width:4rem;
        line-height:4rem;
        font-weight:600;
    }

`
export default function Card({children, hot, img, item, num, category} ) {
    return (
        <CardStyle>
            {hot?<div className="red-sign">마감임박</div>:"" }
            <div className="card">
                <img src={img} alt="사진" /> 

                <div className="container">
                    <p>{item}</p> 
                    <p> 모집인원: {num}</p>
                    <div className="category">{category}</div>
                </div>

            </div>
            <p className="title">{children}</p>
        </CardStyle>
    )
}
