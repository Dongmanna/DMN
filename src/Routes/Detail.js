import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";

const Detail = () => {
    return (
        <>
            <SearchHeader />
            <h1>Detail</h1>
            <span>스니커즈 살 사람</span>
            <br></br>
            <span>본문</span>
            <br></br>
            <Router>
                <Link to="/Chatting">
                    <button>채팅방 입장</button>
                </Link>
            </Router>
            <button>참가하기</button>
            <button>참가 취소</button>
            <br></br>
            <button>구매 완료</button>
            <Router>
                <Link to="/edit">
                    <button>수정하기</button>
                </Link>
            </Router>
            <button>삭제하기</button>
            <br></br>
            <button>댓글달기</button>
        </>
    )
}

export default Detail;