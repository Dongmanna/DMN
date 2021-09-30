import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";
const Write = () => {
    return (
    <>
    <SearchHeader />
    <h1>Write</h1>
    <Router>
        <Link to = "Detail">
            <button>글 작성</button>
        </Link>
    </Router>
    </>
    )

}

export default Write;