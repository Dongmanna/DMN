import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
width:100%;
height:10vh;
padding-top:2vh;
padding-right:4vw;
.Header_R{
        font-family: 'NIXGONM-Vb';
        font-style: normal;
        font-weight: normal;
        font-size: 1.8rem;
        color: #A2A2A2;
        display:flex;
        justify-content: flex-end;
        }

    .gotowrite{
    }
    .gotomy{


    }
    .gotologout{

    }
    .border{
        height:3rem;
        margin:0 1.2rem;
        border-right: solid 3px #A2A2A2;
        transform:translate(0,-.5rem);
    }

    .border2{
        margin:0 1.2rem;
        height:3rem;
        border-right: solid 3px #A2A2A2;
        transform:translate(0,-.5rem);

    }
`;

const SLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active{
        text-decoration:none;
    }
    color:inherit;
`;


const Header = () => {
    return (
        <HeaderStyle>
            <div className="Header_L">
                <SLink to="/">로고 이미지</SLink>
            </div>
            <div className="Header_R">
                    <SLink to="/Write" className="gotowrite"> 게시글 작성 </SLink>
                <div className="border">
                </div>
                    <SLink to="/Mypage" className="gotomy"> 마이페이지 </SLink>
                <div className="border2" />
                    <SLink to="/" className="gotologout"> 로그아웃 </SLink>
            </div>
        </HeaderStyle>
    );
};

export default Header;