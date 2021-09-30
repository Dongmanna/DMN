import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";

const MyPage = () => {
    return (
        <>
            <SearchHeader />
            <h1>MyPage</h1>
            <button>참여 중인 공동구매</button>
            <button>참여 했던 공동구매</button>
            <button>내가 쓴 게시물</button>
            <br></br>
            <Router>
                <Link to="/Detail">
                    <button>card - Detail</button>
                </Link>
            </Router>
        </>
    )
}

export default MyPage;