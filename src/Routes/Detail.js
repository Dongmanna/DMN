import React, { useEffect } from "react";
import SearchHeader from "../Componenets/SearchHeader";
import styled from "styled-components";
import ButtonWhite from "../Componenets/ButtonWhite"
import ButtonGray from "../Componenets/ButtonGray";
import ButtonGreenA from "../Componenets/ButtonGreenA"
import MemberProfile from "../Componenets/MemberProfile";
import CommentBox from "../Componenets/CommentBox";
import temp_image1 from "../img/temp_image1.png"
import avatar from "../img/avatar-pl.png"
import axios from 'axios';

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
	.btnsection {
		display: flex;
		justify-content: flex-end;
	}
	.membersection {
		padding: 5%;
		padding-bottom: 2%;
		display: flex;
		border-bottom: solid 0.2rem;
	}
	.commentsection {
		display: flex;
		flex-direction: column;
		align-items: center;
		.comment-sub {
            width:70vw;
			display: flex;
			align-items: center;
            justify-content: center;
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
				::-webkit-scrollbar {
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
				}
			}
		}
	}
`;

const Detail = ({id,}) => {
    // //백이랑 연결하는 부분

    // const [Content, setContent] = useState("")

    // //url에서 정보 받아오기
    // async function getContent(){
    //     try{
    //         const response = await axios.get('url/id');
    //         setContent(response.data);
    //         console.log(Content);
    //     }catch(error){
    //         console.error(error)

    //     }
    // };

    useEffect(() => {
        // getContent();
    }, [])
    return (
		<DetailStyle>
			<SearchHeader />
			<div className="body">
				<div className="top">
					<div className="left">
						<img src={temp_image1} alt="사진이 없습니다." />
					</div>
					<div className="right">
						<p className="category">카테고리</p>
						<div className="titlesection">
							<div className="title-date">
								<div className="title">
									초코바 100개 나눠 사실 분!
								</div>
								<div className="date">2021-08-23</div>
							</div>
							<div className="author">
								<img
									src={avatar}
									alt="작성자"
									className="author-profile-img"
								/>
								<div className="author-profile">
									하하 <br />
									마포구 대흥동
								</div>
							</div>
						</div>
						<div className="datasection">
							<div className="must">
								<div className="type">품목</div> 오징어 <br />
								<div className="type">모집인원</div> 2/5
							</div>
							<div className="alpha">
								<div className="type">가격</div>  10000원<br />
								<div className="type">마감기한</div> 9/23 <br />
								<div className="type">링크</div> https://google.com
								<br />
							</div>
						</div>
						<div className="btntop">
							<ButtonGreenA secondText="채팅방 입장!">참가하기!</ButtonGreenA>
							<ButtonGray>참가 취소</ButtonGray>
						</div>
					</div>
				</div>
				<div className="textarea">쿠팡 핫딜에 스니커즈 백개에 만원이 떴네요 ㅠㅠ 저랑 같이 주문해서 나누실 분 있나요? 장소는 와르르멘션 앞 사거리 생각중입니다! 결제는 제가 하고 계좌로 보내주시면 되겠습니다    </div>
				<div className="btnsection">
					<ButtonWhite>구매완료</ButtonWhite>
					<ButtonWhite>수정하기</ButtonWhite>
					<ButtonWhite>삭제하기</ButtonWhite>
				</div>
				<div className="membersection">
					<MemberProfile
						img=""
						nickname={'HelloLMS'}
						author={true}
					></MemberProfile>
                    <MemberProfile
						img=""
						nickname={'거시경제학'}
					></MemberProfile>
                    <MemberProfile
						img=""
						nickname={'시간입니다'}
					></MemberProfile>
                    
				</div>
				<div className="commentsection">
                <CommentBox nickname="유재석" >스니커즈 작은 건가요? </CommentBox>
                <CommentBox nickname="박명수" >어떻게 나눌까요? 봉투 가져갈게요!</CommentBox>
                <div className="comment-sub">
                    <textarea name="comment" id="" cols="30" rows="10" placeholder="댓글 입력하기">

                    </textarea>
                    <ButtonWhite>입력</ButtonWhite>
                </div>
                </div>
			</div>
		</DetailStyle>
	);
}

export default Detail;