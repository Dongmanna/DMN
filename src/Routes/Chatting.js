import React, { useEffect } from "react";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import '../css/chat.css';

const ChattingStyle = styled.div`
width: 100%;
`

const Script =() => {
    useEffect(() =>{
        const script = document.createElement('script');
        script.src="/socket.io/socket.io.js";
        script.async = true;
        document.body.appendChild(script);
        return() =>{
            document.body.removeChild(script);
        }
    },[]);
}

const Chatting = () => {
    // Script();
    return (
        <>
            <SearchHeader />
            <ChattingStyle>
                <button>도움말</button>
                <br></br>
                <button>전송</button>
                <h2 id="room_name" className="roomname"> </h2>
                <div className="meminfo">
                    <h3><i className="fas fa-users"></i> 참여 중인 멤버</h3>
                    <ul id="users" className="users">
                    </ul>
                </div>
            
            <div className="chat-container">
                <header className="chat-header">
                    <a href="index.html" className="leavebtn">Leave Room</a>
                </header>
                <main className="chat-main">
                    <div className="box">
                    <h1 className ="info">공동구매 채팅방입니다.구매를 진행할 시간과 장소, 결제 방식을 정해주세요.</h1>
                    <div className ="chat-messages"></div>
                    </div>
                </main>
            </div>
            <div className="chat-form-container">
                <form id="chat-form">
                    <input id="msg" type="text" placeholder="메시지를 입력해주세요" required autocomplete="off" />
                    <button className="sendbtn"><i className="fas fa-paper-plane"></i> 전송</button>
                </form>
            </div>
        </ChattingStyle>
        </>
    )
}

export default Chatting;

