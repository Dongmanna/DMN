import React, { useEffect, useState } from "react";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import ButtonWhite from "../Componenets/ButtonWhite"
import ButtonGray from "../Componenets/ButtonGray";
import ButtonGreenA from "../Componenets/ButtonGreenA"
import MemberProfile from "../Componenets/MemberProfile";
import CommentBox from "../Componenets/CommentBox";
// import temp_image1 from "../img/temp_image1.png"
import avatar from "../img/avatar-pl.png"
// import axios from 'axios';
import { withRouter } from "react-router";
import axios from "axios";

const DetailStyle = styled.div`
	font-family: 'NIXGONM-Vb';
	.body {
		padding: 0 13%;
		margin-top: 3vh;
	}
	.top {
		height: 30vw;
		min-height: 40rem;
		display: flex;
		margin-bottom: 1vh;
	}
	.left {
		width: 30vw;
        display:flex;
        align-items: center;
		img {
			border: solid 0.1rem var(--grn-1);
			border-radius: 0.1rem;
			max-height: 30vw;
            width:100%;
            height:100%;
		}
	}
	.right {
		width: calc(100% - 30vw);
		padding: 0 2%;
		.category {
			font-family: 'Roboto';

			font-size: 0.8rem;
			color: var(--grn-1);
		}
		.titlesection {
			display: flex;
			justify-content: space-between;
			border-bottom: solid 0.3rem #f2f2f2;
			.title-date {
				width: 60%;

				.title {
					font-family: 'Roboto';

					width: 100%;
					font-size: 2.2rem;
					overflow: hidden;
					text-overflow: ellipsis;
					height: 4rem;
				}
				.date {
					width: 100%;
					color: gray;
					margin-left: 1rem;
					font-size: 1.4rem;
				}
			}
			.author {
				display: flex;
				font-size: 1.4rem;
				img {
					width: 3rem;
					height: 3rem;
					border-radius: 40px;
					margin-right: 0.5rem;
				}
			}
		}
		.datasection {
			height: 58%;
			.type {
				width: 20rem;
				display: inline-block;
			}
			.must {
				font-size: 1.8rem;
				border-bottom: solid 0.1rem black;
				line-height: 5rem;
				padding-left: 3%;
				margin-bottom: 1rem;
				height: 50%;
			}
			.alpha {
				font-size: 1.6rem;
				line-height: 3rem;
				padding-left: 3%;
				overflow: hidden;
				text-overflow: ellipsis;

			}
		}
		.btntop {
			padding-top: 2%;
			display: flex;
			justify-content: end;
			align-items: flex-end;
		}
	}

	.textarea {
		width: 100%;
		min-height: 35vh;
        line-height:2.2rem;
		box-shadow: 0 0 1px #f2f2f3;
		padding: 2rem;
		font-size: 1.6rem;
		border: solid 0.3rem #f2f2f2;
		margin-bottom: 2rem;
	}
	.done{
		width:100%;
		min-height: 35vh;
		line-height:35vh;

		text-align: center;
		font-size:3rem;
		border: solid 0.3rem #f2f2f2;

	}
	.btnsection {
		display: flex;
		justify-content: flex-end;
	}
	.membersection {
		padding: 5%;
		padding-bottom: 2%;
		display: flex;
		border-bottom: solid 0.2rem;
		margin-bottom:2rem;
	}
	.commentsection {
		form{
			width:100%;
			display: flex;
			align-items: center;
            justify-content: center;
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		.comment-sub {
            width:70vw;
			
			textarea {
				width: 70%;
				height: 10vh;
				border: none;
				box-shadow: 0 0 1px;
				border: solid var(--grn-1) 0.2rem;
				padding: 2rem;
				font-size: 1.5rem;
				resize: none;
				:focus {
					outline-width: 0.1rem;
					outline-color: var(--grn-1);
				}
				:focus::placeholder {
					color: transparent !important;
				}
				margin-bottom: 2rem;
				/* ::-webkit-scrollbar {
					opacity: 0;
				}
				::-webkit-scrollbar-thumb {
					opacity: 0.3;
					border-right: solid 4px var(--grn-2);
					border-radius: 3px;
					width: 2px;
				}
				::-webkit-scrollbar-corner {
					opacity: 0;
					background-color: transparent;
				} */
			}
		}
	}
`;
//member 수 6명 이상이면 flex다시 설정해야해
const Detail = ({ location }) => {
	const [post, setpost] = useState(
		location.post1===undefined?JSON.parse(sessionStorage.getItem("post")):location.post1

	)
	const [Part, setPart] = useState(false);
	const [Author, setAuthor] = useState({});
	const [Comments, setComments] = useState([]);
	const [commentText, setcommentText] = useState("");
    const handleCommentText = (e) => {
        e.preventDefault();
        setcommentText(e.target.value)
    };


	const authorprofile = Author.profile_image === null ? avatar : Author.profile_image;
	//멤버 매핑
	const members = post.members.map((member) => {
		var isAuthor = member === post.author;
		return (
			<MemberProfile
			key={member.url}
				img=""
				nickname={member.nickname}
				author={isAuthor}
			></MemberProfile>
		);
	});
	//댓글 매핑
	// const getCommentAuthor = (authorURL)=>{
	// 	const response = axios.get(authorURL)
	// 	return response.data
	// }
	const commentBoxes = Comments.map((comment)=>{
		
		var a=[];
		const authorData = getCommentAuthor(comment.author);
		return (
			<CommentBox nickname={"nickname"} key={comment.id}>
				{comment.content}
			</CommentBox>
		);

	})
	//댓글 작성자 정보 가져오기
	async function getCommentAuthor(authorURL) {
		try {
			var response = await axios.get(authorURL)
			
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}
	

	//작성자 정보 가져오기
	async function getAuthor(authorURL) {
		try {
			const response = await axios.get(authorURL);
			await setAuthor(response.data);
		} catch (error) {
			console.error(error);
		}
	}
	//댓글 리스트 가져오기
	async function getComments(id) {
		try {
			const response = await axios.get(
				`http://127.0.0.1:8000/posts/`+id+`/comments/`
			);
			await setComments(response.data);

		} catch (error) {
			console.error(error);
		}
	}
	

	//렌더링
	useEffect(() => {
		const authorURL = post.author;
		if(!(location.post1===undefined)){
			sessionStorage.setItem("post", JSON.stringify(location.post1));
		}

		setpost(
			location.post1===undefined?JSON.parse(sessionStorage.getItem("post")):location.post1
		)
		
		getAuthor(authorURL);
		getComments(post.id);

	}, []);

	return (
		<DetailStyle>
			<SearchHeader />
			<div className="body">
				<div className="top">
					<div className="left">
						<img src="{temp_image1}" alt="사진이 없습니다." />
					</div>
					<div className="right">
						<p className="category">{post.category}</p>
						<div className="titlesection">
							<div className="title-date">
								<div className="title">{post.title}</div>
								<div className="date">{post.pub_date}</div>
							</div>
							<div className="author">
								<img
									src={authorprofile}
									alt="작성자"
									className="author-profile-img"
								/>
								<div className="author-profile">
									{Author.nickname}
									<br /> {/*author 어떻게 만지는지 확인 */}
									{Author.address}
								</div>
							</div>
						</div>
						<div className="datasection">
							<div className="must">
								<div className="type">품목</div> {post.item}
								<br />
								<div className="type">모집인원</div>{' '}
								{post.members.length}/{post.limit}
							</div>
							<div className="alpha">
								<div className="type">가격</div>{' '}
								{post.price ? post.price : '미정'}
								<br />
								<div className="type">마감기한</div>{' '}
								{post.deadline ? post.deadline : '미정'} <br />
								<div className="type">링크</div>{' '}
								{post.link ? post.link : '미정'}
								<br />
							</div>
						</div>
						<div className="btntop">
							<ButtonGreenA
								function1={setPart}
								part={Part}
								function2={'채팅방 입장'}
								secondText="채팅방 입장!"
							>
								참가하기!
							</ButtonGreenA>
							{Part ? (
								<ButtonGray setPart={setPart}>
									참가 취소
								</ButtonGray>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				{post.done?<div className="done">거래가 완료되었습니다.</div>:<div className="textarea">{post.body} </div>}
				<div className="btnsection">
					<ButtonWhite>구매완료</ButtonWhite>
					<ButtonWhite>수정하기</ButtonWhite>
					<ButtonWhite>삭제하기</ButtonWhite>
				</div>
				<div className="membersection">{members}</div>
				<div className="commentsection">
					{commentBoxes}
					<div className="comment-sub">
						<form>
						<textarea
							name="comment"
							id=""
							cols="30"
							rows="10"
							placeholder="댓글 입력하기"
							onChange={handleCommentText}
						></textarea>
						<ButtonWhite>입력</ButtonWhite></form>
					</div>
				</div>
			</div>
		</DetailStyle>
	);
};

export default withRouter(Detail);