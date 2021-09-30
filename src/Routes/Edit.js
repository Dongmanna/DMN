import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";

const Edit = () => {
    return (
    <>
    <SearchHeader />
    <h1>Edit</h1>
    <Router>
        <Link to = "Detail">
            <button>수정하기</button>
        </Link>
    </Router>
    </>
    )

}

export default Edit;