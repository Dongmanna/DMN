import React, { useState, useRef, useEffect } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import ButtonGray from "../Componenets/ButtonGray";
import ProfileCate from "../Componenets/ProfileCategory";
import Content from "../data";
import Slide from "../Componenets/MypageSlide";




const MypageStyle = styled.div`
    font-family: ;
    .profile{
    position: absolute;
    width: 150px;
    height: 150px;
    left: 235px;
    top: 152px;
    background: #F3F3F3;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4999px;
    }

    .pb{
    position: absolute;
    width: 83px;
    height: 29px;
    left: 269px;
    top: 283px;
    }

    .lc{
    position: absolute;
    width: 83px;
    height: 29px;
    top:221px;
    left:579px;
    }
    .arrow{
        position: absolute;
        left:1200px;
        top:735px;
        border-top: 50px solid transparent;
        border-left: 50px solid #9BBA74;
        border-bottom: 50px solid transparent;
        border-radius: 1px;
}
`
const TotalContainer = styled.div`
width: 500px;
margin: auto;
height: 1000px;
overflow: hidden;
`
const SlideContainer = styled.div`
margin: 0 auto;
margin-bottom: 2em;
display: flex;
`
const TOTAL_SLIDES = 2;

const MyPage = () => {
    return (
        <>
            <SearchHeader />
            <h1>MyPage</h1>
            <MypageStyle>
                <div className="profile">
                </div>
                <div className="pb">
                    <ButtonGray>사진 변경</ButtonGray>
                </div>
                <div className="lc">
                    <ButtonGray>지역 변경</ButtonGray>
                </div>
                <ProfileCate content = {Content}></ProfileCate>
                <div className="arrow"></div>
                <SlideContainer>
                    <Slide content = {Content}></Slide>
                </SlideContainer>
                <br></br>
                <Router>
                    <Link to="/Detail">
                        <button>card - Detail</button>
                    </Link>
                </Router>
            </MypageStyle>
        </>
    )
}

export default MyPage;