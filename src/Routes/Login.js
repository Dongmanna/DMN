import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import login1 from "../img/login1.png";
import login2 from "../img/login2.png";
import login3 from "../img/login3.png";
import login4 from "../img/login4.png";
import login5 from "../img/login5.png";
import login6 from "../img/login6.png";
import login7 from "../img/login7.png";
import axios from 'axios';
// import {browserHistory} from 'react-router';


const LoginStyle = styled.div`
	width:100%;
	display: flex;
	.left {
		width: 54%;
		min-width:50rem;
		height: 100vh;
		background-color: var(--grn-1);
		position: relative;
		.contain {
			position: absolute;
			right: 0;
			.carousel {
				margin-top: 20vh;
				position: relative;
				overflow: hidden;
				width: 50rem;
				

				.p {
					font-size: 4rem;
					color: white;
					opacity: 0.5;
					cursor: pointer;
					z-index: 3;
				}
				.prev {
					position: absolute;
					top: 40%;
					left: 0;
				}
				.next {
					position: absolute;
					top: 40%;
					right: 0;
				}
				.content {
					display: flex;
					transform: translate(${(props) => props.num * -50}rem, 0);
					transition: 1s;
					img {
						width: 50rem;
					}
				}
			}
		}
	}

	.right {
		width: 45%;
		height: 100vh;
		position: relative;
		.login-box {
			width:70%;
			max-width:calc(100vw - 50rem);

			border: solid 1px var(--grn-1);
			height: 50rem;
			margin-top: 20vh;
			@media(max-width:1040px){
					width:46vw;
				}
		input {
            width:65%;
            height:5rem;
			padding-left: 1rem;
            margin-bottom:3rem;
			border: solid 1px black;
			background-color: transparent;
			border-radius: 2px;
			font-size: 1.4rem;
			::placeholder {
				color: black;
			}

			:focus {
				outline-width: 0;
			}

			:focus::placeholder {
				color: transparent !important;
			}
		}
		button {
			width: 10rem;
			height: 3rem;
			background: #ffffff;
			border: .2rem solid var(--grn-1);
			font-size: 1.5rem;
			border-radius:3px;
			transition: 0.4s;
			:hover {
				background-color: var(--grn-1);
				color: #fff;
				border: none;
			}
			:active {
				box-shadow: -0.8px 0.8px 4px 0 var(--gray1);
			}
		}
		
		
			
		}
        form{
            width:100%;
            margin-top:10rem;
            height:50%;
            display: flex;
			flex-direction: column;
			align-items: center;
        }
        .btn-container {
			display: flex;
			justify-content: space-evenly;
            width:100%;
			@media(max-width:600px){
				display:inline;
				padding-left:5%;
			}
		}
	}
`;

const Login = ({setIsLogged}) =>{

	const [carouselNumber, setCarouselNumber] = useState(0);

	//input value관리
	
	const [Email, setEmail] = useState("")
	const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };
	const [PassWord, setPassWord] = useState("")
	const handlePassWord = (e) => {
        e.preventDefault();
        setPassWord(e.target.value);
    }
	async function getUserNow(){
        try{

            const token = "Token "+localStorage.getItem("user_token")
            const response = await axios.get( "http://127.0.0.1:8000/api/user/", {headers:{
                'Accept': 'application/json',
				'Content-Type': 'application/json',
                "Authorization": token,
            }});            
            await localStorage.setItem("userNow",JSON.stringify(response.data))
            
        }catch(error){
            console.error(error)

        }
    };

	//axios submit
	async function login(){
		await axios.post('http://127.0.0.1:8000/api/login/',
		{
			email: Email,
			password:PassWord
		}

		).then(res=> {localStorage.setItem("user_token",res.data.key);
	});
	await getUserNow();
	setIsLogged(true)

	};
    return (
		<LoginStyle num={carouselNumber}>
			<div className="left">
				<div className="contain">
					<div className="carousel">
						<div
							className="p prev"
							onClick={() => {
								carouselNumber > 0
									? setCarouselNumber(carouselNumber - 1)
									: setCarouselNumber(carouselNumber);
							}}
						>
							{'<'}
						</div>
						<div
							className="p next"
							onClick={() => {
								carouselNumber < 6
									? setCarouselNumber(carouselNumber + 1)
									: setCarouselNumber(carouselNumber);
							}}
						>
							{'>'}
						</div>
						<div className="content">
							<img src={login1} alt="" />
							<img src={login2} alt="" />
							<img src={login3} alt="" />
							<img src={login4} alt="" />
							<img src={login5} alt="" />
							<img src={login6} alt="" />
							<img src={login7} alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="right">
                <div className="login-box">
                    <form >
                        <input type="text" placeholder="E-mail" name = "email"onChange={handleEmail} />
                        <input type="text" placeholder="Password" name = "password"onChange={handlePassWord} />
                        <div className="btn-container">
						<button onClick={login}>로그인</button>

                        <Link to="/SignUP"><button >회원가입</button></Link>
                        </div>

                    </form>

                </div>
			</div>
		</LoginStyle>
	);}

export default Login;