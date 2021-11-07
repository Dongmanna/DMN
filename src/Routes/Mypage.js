import React, { useState } from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import {Content} from "../data";
import MypageCate from "../Componenets/MypageCate";
import MypageCard from "../Componenets/MypageCards";

const MypageStyle = styled.div`
width:100%;
.profileimg{
    position: absolute;
    width:13vw;
    height:13vw;
    left:18vw;
    top:13vw;
    background: #F3F3F3;
    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 4999px;
}
.profileinfo{
    font-family: 'Roboto';
    font-size:1.8rem;
}

.nickname{
    position:absolute;
    width: 19.5rem;
    height:5vh;
    left: 31.5vw;
    top:15vw;
}
.loc{
    position:absolute;
    width: 19.5rem;
    height:5vh;
    left: 31.5vw;
    top:18.5vw;
}
.count{
    position:absolute;
    width: 19.5rem;
    height:5vh,;
    left: 31.5vw;
    top:22vw;
}
.contain{
    position:absolute;
    left:12.8vw;
    width: 77.5vw;
    height: 41vw;
    overflow: hidden;
        .cards{
            transform: translate(${(props) => props.num * -1012}px, 0);
                            transition: 1s;
}
}
.rarrow{
    position: absolute;
    width: 5vw;
    right: 1vw;
    top: 56vw;
    border-top: 5rem solid transparent;
    border-left: 5rem solid #9BBA74;
    border-bottom: 5rem solid transparent;
    :hover{
        cursor:pointer;
    }
}
.larrow{
    position: absolute;
    margin-left:1vw;
    width: 5vw;
    left: 1vw;
    top: 56vw;
    border-top: 5rem solid transparent;
    border-right: 5rem solid #9BBA74;
    border-bottom: 5rem solid transparent;
    :hover{
        cursor:pointer;
    }
}

`

const MyPage = () => {
    const [carouselNum, setcarouselNum] = useState(0);
    return (
        <MypageStyle num={carouselNum}>
            <SearchHeader />
            <br></br>
            <div className="profileinfo">
                <div className="profileimg"></div>
                <div className = "infos">
                    <div className="nickname">닉네임</div>
                    <div className="loc">주소</div>
                    <div className="count">참여횟수</div>
                </div>
            </div>
            <div className="larrow"
                onClick={() => {
                    carouselNum > 0 ? setcarouselNum(carouselNum - 1) :
                        setcarouselNum(carouselNum);
                }}></div>
            <div className="rarrow"
                onClick={() => {
                    carouselNum < 10 ? setcarouselNum(carouselNum + 1)
                        : setcarouselNum(carouselNum);
                }}></div>
            <MypageCate />
            <div className="contain">
                <div className="cards">
                    <MypageCard content={Content} />
                </div>
            </div>
            <Router>
                <Link to="/Detail">
                    <button>card - Detail</button>
                </Link>
            </Router>
        </MypageStyle>
    )
}

export default MyPage;