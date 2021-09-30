import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Header from "../Componenets/Header";

const Result = () => {
    return (
        <>
            <Header />
            <h1>Result</h1>
            <Router>
                <Link to="/Result">
                    <form >
                        <input type="text"></input>
                        <button>검색</button>
                    </form>
                </Link>
            </Router>
            <h1>검색어에 대한 결과입니다</h1>
            <div>
                <button>
                    전체
                </button>
                <button>
                    온라인
                </button>
                <button>
                    오프라인
                </button>
                <button>
                    배달
                </button>
            </div>

            <Router>
                <Link to="/Detail">
                    <button>Card - Detail</button>
                </Link>
            </Router>
        </>
    )
}

export default Result;