import React, { useEffect, useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Header from "../Componenets/Header";
import Content from "../data";
import styled from "styled-components";
import MainCategory from "../Componenets/MainCategory";
import SearchBarResult from "../Componenets/SearchBarResult";

const ResultStyle=styled.div`

.search-box{
    width:80vw;
    margin:0 10vw;
    margin-top:15rem;
    margin-bottom: 10rem;
}
`
const Result = () => {
    const [searchText, setsearchText] = useState("");
    const [resultData,setResultData]=useState(Content);
    console.log(resultData);

    useEffect(()=>{
        setResultData(()=> Content.filter((post) => post.title.match(searchText)));
    },[searchText]);

    
    return (
        <ResultStyle>
            <Header />
            <div className="search-box">
                <SearchBarResult searchText={searchText} setSearchText={setsearchText}/>
            </div>
            
            <MainCategory phrase={ '"'+searchText +'"'+"에 대한 검색 결과입니다."} content={resultData}/>
            <Router>
                <Link to="/Detail">
                    <button>Card - Detail</button>
                </Link>
            </Router>
        </ResultStyle>
    )
}

export default Result;