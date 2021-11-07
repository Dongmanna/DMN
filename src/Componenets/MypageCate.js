import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';

const ProfileCategoryStyle = styled.div`
width:100%;
/* width:80vw; */
margin-left: 10vw;
max-height:200vh;

.Im_in{
width: 82%;
display: flex;
flex-wrap: nowrap;
margin-top:26vw;
margin-bottom: 1%;
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 1.9vw;
border-bottom: solid var(--grn-1) 0.3rem;
    margin-bottom:2rem;
}
`
const SelectedStyle = styled.p`
        cursor:pointer;
        margin-left:3%;
        margin-right: 7%;
        color:${(props) => props.c === props.category ? "var(--grn-1)" : "black"};
        border-bottom:${(props) => props.c === props.category ? "var(--grn-1)" : "transparent"} solid 0.3rem;
        transition:.3s;
`
const MypageCate= ({ content }) => {
    const [category, setcategory] = useState("");
    const [postData, setpostData] = useState(content);

    useEffect(() => {
        setpostData(content)
    }, [content]);

    useEffect(() => {
        if (category === '') return;
        setpostData(() =>
            // content &&
            (content.author = "a") &&
            content.filter((post) =>
                post.category.match(category)

            )
        );
    }, [category])

    return (
        <ProfileCategoryStyle>
            <>
            <div className="Im_in">
                <SelectedStyle category={category} c={""} onClick={() => setcategory("")}>전체</SelectedStyle>
                <SelectedStyle category={category} c={"참여중인 공동구매"} onClick={() => setcategory("ongoing")}>참여중인 공동구매</SelectedStyle>
                <SelectedStyle category={category} c={"참여했던 공동구매"} onClick={() => setcategory("past")}>참여했던 공동구매</SelectedStyle>
                <SelectedStyle category={category} c={"내가 쓴 게시글"} onClick={() => setcategory("author")}>내가 쓴 게시글</SelectedStyle>
            </div>
            <div className="border"></div>
            </>
        </ProfileCategoryStyle>
    )
}
export default MypageCate;