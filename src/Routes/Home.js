import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import Header from "../Componenets/Header";
import "../css/Home.css"


const Ani = () => {
    return (
        <>
            <div className="Clouds">
                < div className="cloud cloud--one">
                    <img src="https://cdn.pixabay.com/photo/2014/03/25/15/24/cloud-296722_1280.png"></img>
                </div>
                <div className="cloud cloud--two">
                    <img src="https://cdn.pixabay.com/photo/2014/03/25/15/24/cloud-296722_1280.png"></img>
                </div>
                <div className="cloud cloud--three">
                    <img src="https://cdn.pixabay.com/photo/2014/03/25/15/24/cloud-296722_1280.png"></img>
                </div>
                <div className="cloud cloud--four">
                    <img src="https://cdn.pixabay.com/photo/2014/03/25/15/24/cloud-296722_1280.png"></img>
                </div>
            </div>

            <div className="slogan-box">
                <div className="slogan-wrap">
                    <svg width="800" height="180" viewBox="0 0 620 220">
                        <text x="0" y="20%">저</text>
                        <text x="30" y="20%">렴</text>
                        <text x="65" y="20%">한</text>
                        <text x="140" y="50%">현</text>
                        <text x="170" y="50%">명</text>
                        <text x="205" y="50%">한</text>
                        <text x="290" y="20%">낭</text>
                        <text x="320" y="20%">비</text>
                        <text x="350" y="20%">없</text>
                        <text x="380" y="20%">는</text>
                        <text x="460" y="30%">소</text>
                        <text x="490" y="30%">비</text>
                        <text x="520" y="30%">라</text>
                        <text x="550" y="30%">이</text>
                        <text x="580" y="30%">프</text>
                    </svg>
                </div>
            </div>
        </>
    )
}

const Home = () => {
    return (
        <>
            <Header />
            <h1>Home</h1>
            <main>
                <Router>
                    <form >
                        <input type="text"></input>
                        <Link to="/Result">
                            <button>검색</button>
                        </Link>
                    </form>
                </Router>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="maincss">
                    <div className="line"></div>
                    <Ani />
                </div>
                <div className="card-cate">
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

                    <Router>
                        <Link to="/Detail">
                            <button>Card - Detail</button>
                        </Link>
                    </Router>
                </div>
            </main>

        </>

    )
}

export default Home;