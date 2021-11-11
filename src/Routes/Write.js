import React from "react";
import { Link } from "react-router-dom";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import ButtonGreen from "../Componenets/ButtonGreen";
import Input from "../Componenets/Input"

const WriteStyle = styled.div`
	font-family: 'NIXGONM-Vb';
	width: 100%;
	.body{
		width:74vw;
		margin:0 13vw;
		margin-bottom:10rem;
		padding-top:5vh;

	}
	.top {
		display: flex;
		height: 35vh;
		width: 100%;
		margin-bottom:2%;
	}
	.category {
		width: 20rem;
		height: 3rem;
		border: var(--grn-1) 0.2rem solid;
		border-radius: 8px;
		padding-left: 1rem;
		margin-bottom: 2rem;
		:hover{
			background-color: #f2f2f2;
		
		}
		:focus{
			background-color: white;
			outline-width: 0;
		}
	}
	.title {
		width: 100%;
		height: 3rem;
		font-size: 2rem;
		border: none;
		border-bottom: solid 0.2rem var(--grn-1);
		margin-bottom: 2rem;
		padding-left: 1.5rem;

		:focus {
			outline-width: 0;
		}
		::placeholder{
			color:black;
        }

	}
	.container {
		display: flex;
		height: 60%;
	}
	.inputs {
		width: 60%; //여기서 넓이
	}
	.con {
		width: 40%;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}
	.imgbox {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		img {
		height: 100%;
		width:35vmin;
		height:35vmin;
		}
		.default-img{
		font-size:1.6rem;
		padding: 0 4rem;
		padding-top: calc(17vmin - 2rem);
		text-align:center;
		/* max-width:calc(35vh - 3rem);
		height:35vh;
		max-height:40vw; */
		width:35vmin;
		height:35vmin;
		
		background-color: #f2f2f2;
		/* z-index:-1; */
		
		}
	}
	
	.imgbtn {
		width:6rem;
		height: 1.8rem;
		
		text-align: center;
		border: 1px solid #b9b9b9;
		border-radius: 5px;
		font-size: 1.4rem;
		background-color: #fff;
		color: #b9b9b9;
		:hover {
			box-shadow: 1px 1px 7px;
		}
		box-shadow: 0.4px -0.4px 4px;
		:active {
			box-shadow: -0.6px 0.6px 4px;
		}
	}
	.imgsub {
		position:absolute;
		opacity: 0;
	}
	textarea {
		width: 100%;
		height: 35vh;
		border: none;
		box-shadow: 0 0  1px;
		border-top: solid var(--grn-1) 0.3rem;
		padding: 2rem;
		font-size: 1.5rem;
		overflow: scroll;
		resize:none;
		:focus {
			outline-width: 0.1rem ;
			outline-color: var(--grn-1);
		}
		:focus::placeholder {
			color: transparent !important;
		}
		margin-bottom: 2rem;
		::-webkit-scrollbar{
			opacity:0;
		}
		::-webkit-scrollbar-thumb{
			opacity:0.3;
			border-right:solid 4px var(--grn-2);
			border-radius: 3px;
			width:2px;
			
		}
		::-webkit-scrollbar-corner{
			opacity: 0;
			background-color: transparent;
		}
		


	}
	
	.btn {
		position: absolute;
		right: 14vw;
	}
`;
const Write = () => {
    return (
		<WriteStyle>
			<SearchHeader />
			<form className="body"action="">
				<div className="top">
					<div className="inputs">
						<select name="category"className="category">
							<option value="offline">오프라인</option>
							<option value="online">온라인</option>
							<option value="baedal">배달</option>
						</select>
						<input type="text"  className="title"placeholder="제목을 입력해주세요" />
						<div className="container">
							<div className="left-con con">
								<Input required placeholder='지역'></Input>
								<Input required placeholder='품목'></Input>
								<Input required placeholder='정원'></Input>
							</div>
							<div className="right-con con">
								<Input size="L" placeholder="링크"></Input>
								<Input size="L" placeholder="가격"></Input>
								<Input size="L" placeholder="마감기한" type={"date"}></Input>
							</div>
						</div>
					</div>
					<div className="imgbox">
						{/* <img src="" alt=""  /> */}
						<div className="default-img">사진을 추가하지 않으면 설정하신 품목에 맞는 랜덤 이미지가 배정됩니다.</div>
						<label For="input-file" className="imgbtn">사진추가</label>
					<input type="file" id="input-file" className="imgsub"/>
                    </div>
				</div>
				<textarea name="body" id="" cols="30" rows="10" placeholder="만날 장소와 시간, 구매 방법과 배분방법 등을 간단히 적어주세요."/>
				<br />
				<Link to="Detail" className="btn">
					<ButtonGreen type="submit">작성하기</ButtonGreen>
				</Link>
			</form>
		</WriteStyle>
	);

}

export default Write;