import React from 'react'
import styled from 'styled-components'


const CardStyle=styled.div`
    width:23vw;
    @media(max-width:1040px){
        width:36vw;
    }
    height:26rem;
    background-color:#fff;
    position:relative;
    color:black;
    .red-sign{
        background-color: var(--hred);
        border-radius:1px;
        width: 8rem;
        height: 2.5rem;
        color:#fff;
        text-align: center;
        line-height:2.5rem;
        z-index:1;
        position:absolute;
        
    }
    .card{
        border-radius: .5rem;
        background-color:#f8f8f8;
        width:100%;
        height: 19rem;
        /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
        box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 2.1px;
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px; */
        position:relative;
        margin-top:1rem;
        display:flex;
        :hover{
            transition: .1s;
            transform: scale(1.02);
            cursor: pointer;

        }
    }
    .title{
        font-family: 'NIXGONM-Vb';
        position:absolute;
        top:19rem;
        font-family: NIXGONFONTS V2.0;
        font-size: 1.8rem;
        line-height: 2.4rem;
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
        height:100%;
        width:40%;
        padding-left:1rem;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        p{
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
        width: 60%;
        height: 100%;
        border-radius:.1rem;
        border:solid .2rem var(--grn-1);
        background-color: #fff;
    }
    .category{
        border-radius:40000000px;
        background-color: #fff;
        text-align: center;
        position:absolute;
        right:1rem;
        bottom:1rem;
        height:4.5rem;
        width:4.5rem;
        line-height:4rem;
        font-weight:600;
        opacity: 0.3;
    }

`
export default function Card({children, hot, img, item, num, category} ) {
    return (
        <CardStyle>
            {hot?<div className="red-sign">마감임박</div>:"" }
            <div className="card">
                <img src={img} alt="사진" /> 

                <div className="container">
                    <p>품목  {item}</p> 
                    <p>정원  {num}</p>
                    <div className="category">{category}</div>
                </div>

            </div>
            <p className="title">{children}</p>
        </CardStyle>
    )
}
