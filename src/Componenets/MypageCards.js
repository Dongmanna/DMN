import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { HashRouter as Router, Link } from "react-router-dom";

const ProfileCategoryStyle = styled.div`

width:80vw;
max-height:200vh;
.content{
    display: grid; 
    @media(max-width: 1500px){
        grid-template-columns: repeat(8,minmax(33%, auto));
    }
    @media(max-width: 1050px){
        grid-template-columns: repeat(8,minmax(50%, auto));
    }
    /* repeat 숫자는 포스트 개수 % 2 */
    column-gap: 0.1%;
}
/* .border{
position: absolute;
width: 80vw;
height: 0px;
left: 130px;
top: 50vh;
border: 3px solid #9BBA74;
background-color: #9BBA74;
} */
`
const MypageCard = ({ content }) => {
    const [category, setcategory] = useState("");
    const [postData, setpostData] = useState(content);

    useEffect(() => {
        setpostData(content)
    }, [content]);

    useEffect(() => {
        if (category === '') return;
        setpostData(() =>
            content.filter((post) =>
                post.category.match(category)

            )
        );
    }, [category])

    return (
        <ProfileCategoryStyle>
            <div className="content">
                {postData && postData.map((post) => (
                        <Card
                            key={post.id}
                            item={post.item}
                            category={post.category}
                            hot={(post.limit === post.members.length + 1) ? true : false}
                            img={post.img}
                            num={post.members.length + "/" + post.limit}
                            author={post.author}
                        >
                            {post.title}
                        </Card>
                    
                )
                )}
            </div>
        </ProfileCategoryStyle>
    )
}

export default MypageCard;