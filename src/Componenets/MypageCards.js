import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { HashRouter as Router, Link } from "react-router-dom";

const ProfileCategoryStyle = styled.div`
width:80vw;
max-height:200vh;
.content{
    display: grid; 
    grid-template-columns: repeat(8, minmax(325px,auto));
    /* repeat 숫자는 포스트 개수 % 2 */
    column-gap: 13px;
    height: 475px;
}
.border{
position: absolute;
width: 1070px;
height: 0px;
left: 130px;
top: 400px;
border: 3px solid #9BBA74;
background-color: #9BBA74;
}
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
            // content &&
            (content.author = "a") &&
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
                            hot={(post.limit === post.participants.length + 1) ? true : false}
                            img={post.img}
                            num={post.participants.length + "/" + post.limit}
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