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

const LoginStyle = styled.div`
	display: flex;
	.left {
		width: 54vw;
		height: 100vh;
		background-color: var(--grn-1);
		position: relative;
		.contain {
			position: absolute;
			right: 0;
			.carousel {
				margin-top: 15vh;
				position: relative;
				overflow: hidden;
				width: 55rem;
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
					transform: translate(${(props) => props.num * -55}rem, 0);
					transition: 1s;
					img {
						height: 55rem;
					}
				}
			}
		}
	}

	.right {
		width: 46vw;
		height: 100vh;
		position: relative;
		input {
            width:65%;
            height:5rem;
            margin-bottom:3rem;
			border: solid 1px black;
			background-color: transparent;
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
			width: 100px;
			height: 30px;
			background: #ffffff;
			border: 2px solid var(--grn-1);
			font-size: 1.5rem;
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
		
		.login-box {
			border: solid 1px var(--grn-1);
			height: 55rem;
			margin-top: 15vh;
			width: 45rem;
			
		}
        form{
            padding-top:10%;
            width:100%;
            margin-top:25%;
            height:50%;
            display: flex;
			flex-direction: column;
			align-items: center;
        }
        .btn-container {
			display: flex;
			justify-content: space-evenly;
            width:100%;
		}
	}
`;

const Login = () =>{
    const [carouselNumber, setCarouselNumber] = useState(0);
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
                    <form action="submit">
                        <input type="text" placeholder="E-mail" />
                        <input type="text" placeholder="Password" />
                        <div className="btn-container">
                        <button>로그인</button>
                        <Link to="/SignUP"><button>회원가입</button></Link>
                        </div>

                    </form>

                </div>
			</div>
		</LoginStyle>
	);}

export default Login;