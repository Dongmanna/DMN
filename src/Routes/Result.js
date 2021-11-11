import React, { useEffect, useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Header from "../Componenets/Header";
import {Content} from "../data";
import styled from "styled-components";
import MainCategory from "../Componenets/MainCategory";
import SearchBarResult from "../Componenets/SearchBarResult";
import axios from 'axios';



const ResultStyle=styled.div`

.search-box{
    width:80vw;
    margin:0 10vw;
    margin-top:15rem;
    margin-bottom: 10rem;
}
`
const Result = ({location}) => {
    const word = location.word; 
    const [searchText, setsearchText] = useState(word); 
    const [resultData,setResultData]=useState(Content);

    // //백이랑 연결하는 부분
    // const [Content, setContent] = useState("")
    // //url에서 정보 받아오기
    // async function getContent(){
    //     try{
    //         const response = await axios.get('url');
    //         setContent(response.data);
    //         console.log(Content);
    //     }catch(error){
    //         console.error(error)

    //     }
    // };

    useEffect(()=>{
        // getContent();

        setResultData(()=> Content.filter((post) => post.title.match(searchText)));
    },[searchText]);

    console.log(word);
    return (
        <ResultStyle>
            <Header />
            <div className="search-box">
                <SearchBarResult searchText={searchText} setSearchText={setsearchText}/>
            </div>
            
            <MainCategory phrase={ searchText? '"'+searchText  +'"에 대한 검색 결과입니다.':"검색어를 입력해주세요."} content={resultData}/>
            <Router>
                <Link to="/Detail">
                    <button>Card - Detail</button>
                </Link>
            </Router>
        </ResultStyle>
    )
}

export default withRouter(Result);