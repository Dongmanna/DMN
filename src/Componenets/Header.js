import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";

const Header = () => {
    return (
        <Router>
            <div>
                <Link to = "/">로고이미지</Link>
                <Link to="/Write"> 게시글 작성 </Link>
                <Link to="/Mypage"> 마이페이지 </Link>
                <Link to="/"> 로그아웃 </Link>
            </div>

        </Router>
    );
};

export default Header;