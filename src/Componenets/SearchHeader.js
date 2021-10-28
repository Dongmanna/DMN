import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const HeaderStyle = styled.div`
    .Header_R{
        font-family: 'NIXGONM-Vb';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #A2A2A2;
        }

    .gotowrite{
        position: absolute;
        width: 95px;
        height: 24px;
        left: 1067px;
        top: 42px;
    }
    .gotomy{
        position: absolute;
        width: 88px;
        height: 24px;
        left: 1202px;
        top: 42px;
    }
    .gotologout{
        position: absolute;
        width: 71px;
        height: 24px;
        left: 1336px;
        top: 42px;
    }

    .border{
        position: absolute;
        width: 29px;
        left: 1168px;
        top: 52px;
        border: solid 1.5px #A2A2A2;
        background-color: #A2A2A2;
        transform: rotate(90deg);
    }

    .border2{
        position: absolute;
        width: 29px;
        left: 1300px;
        top: 52px;
        border: solid 1.5px #A2A2A2;
        background-color: #A2A2A2;
        transform: rotate(90deg);
    }
`;

const SLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active{
        text-decoration:none;
    }
    color:inherit;
`;


const SearchHeader = () => {
    return (
        <Router>
            <div>
                <div className="Headersearchbar">
                    <SLink to="/Result"><SearchBar size="S" /></SLink>
                </div>
                <HeaderStyle>
                    <div className="Header_L">
                        <SLink to="/">로고 이미지</SLink>
                    </div>
                    <div className="Header_R">
                        <div className="gotowrite">
                            <SLink to="/Write"> 게시글 작성 </SLink>
                        </div>
                        <div className="border">
                        </div>
                        <div className="gotomy">
                            <SLink to="/Mypage"> 마이페이지 </SLink>
                        </div>
                        <div className="border2" />
                        <div className="gotologout">
                            <SLink to="/"> 로그아웃 </SLink>
                        </div>
                    </div>
                </HeaderStyle>
            </div>
        </Router>
    );
};

export default SearchHeader;