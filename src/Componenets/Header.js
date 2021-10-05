import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.div`
    height:7vh;
    background-color: var(--grn-1);
`
const Header = () => {
    return (
        <HeaderStyle>
        <Router>
            <div>
                <Link to = "/">로고이미지</Link>
                <Link to="/Write"> 게시글 작성 </Link>
                <Link to="/Mypage"> 마이페이지 </Link>
                <Link to="/"> 로그아웃 </Link>
            </div>

        </Router>
        </HeaderStyle>
    );
};

export default Header;