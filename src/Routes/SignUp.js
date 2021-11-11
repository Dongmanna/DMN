import React from 'react';
import styled from 'styled-components';
import Input from '../Componenets/Input';
import ButtonGreen from '../Componenets/ButtonGreen';
import { Link } from 'react-router-dom';

const SignUpStyle = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 10vh;
	h1 {
		font-family: 'Roboto';
		color: #424242;
		font-size: 2rem;
		margin-bottom: 4rem;
	}
	.box {
		width: 50rem;
	}
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.line {
		border-bottom: solid #f2f2f2 2px;
		width: 100%;
	}
	label {
		font-size: 1.8rem;
		font-weight: bold;
		line-height: 4rem;
		display: block;
		margin-top: 4rem;
	}
	.input-box {
		width: 80%;
	}
	h2 {
		font-size: 1.5rem;
		color: gray;
		font-weight: 500;
		font-family: 'NIXGONM-Vb';
		margin-bottom: 2rem;
	}
	h3 {
		display: inline-block;
		margin: 0 0.8rem;
		color: #f2f2f2;
		font-size: 1.8rem;
	}
	Input {
		width: 100%;
		border-top: solid 2px var(--grn-1);
		border-left: solid 2px var(--grn-1);
		border-right: solid 2px var(--grn-1);
		border-radius: 5px;
		height: 4.2rem;
		:hover {
			background-color: #f2f2f2;
		}
		:focus {
			outline-width: 0;
			border: solid 2px orange;
			background-color: white;
		}
	}
	.email input {
		width: 50%;
	}
	select {
		background-color: transparent;
		height: 4rem;
		width: calc(50% - 4rem);
		border-radius: 5px;
		border: var(--grn-1) 2px solid;

		:focus {
			outline-width: 0;

			border: solid 2px orange;
		}
	}
    button{
        margin-top:5rem;
        margin-bottom:5rem;

    }
`;

export default function SignUp() {
	return (
		<SignUpStyle>
			<div className="box">
				<h1>회원가입</h1>
				<div className="line"></div>
				<form action="">
					<div className="input-box email">
						<label htmlFor="">이메일</label>
						<h2>이메일을 입력해주세요.</h2>
						<Input
							type="text"
							id="email-input"
							placeholder="이메일"
						/>
						<h3>@</h3>
						<select name="" id="">
							<option value="naver.com">naver.com</option>
							<option value="gmail.com">gmail.com</option>
							<option value="_manual">직접입력</option>
						</select>
					</div>

					<div className="input-box password">
						<label htmlFor="">비밀번호</label>
						<h2>비밀번호를 입력해주세요.</h2>
						<Input type="text" placeholder="비밀번호 입력" />
					</div>

					<div className="input-box nickname">
						<label htmlFor="">닉네임</label>
						<h2>
							앞으로의 거래에서 사용할 별명을 입력해주세요. 한 번
							정한 닉네임은 바꿀 수 없어요.
						</h2>
						<Input type="text" placeholder="닉네임 입력" />
					</div>

					<div className="input-box address">
						<label htmlFor="">주소</label>
						<h2>
							현재 위치하신 주소를 입력해주세요 ex) 마포구 대흥동
						</h2>
						<Input type="text" placeholder="주소" />
					</div>
						<Link to="/" > <ButtonGreen>가입하기</ButtonGreen></Link>
				</form>
			</div>
		</SignUpStyle>
	);
}
