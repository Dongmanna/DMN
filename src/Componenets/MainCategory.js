import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Card from './Card.js';

const MainCategoryStyle = styled.div`

width:80vw;
margin:0 10vw;
max-height:200vh;
.phrase{
    font-size:3rem;
    margin-bottom:4rem;
    font-weight:600;
    font-family: 'Poppins';
}
.card-container{
    /* display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width:100%; */
    display: grid; 
    
    
        grid-template-columns: repeat(3,minmax(33%, auto));

    @media(max-width: 1040px){
        grid-template-columns: repeat(2,minmax(50%, auto));
    }

    column-gap: 0.3%;
    row-gap: 1.5%;
}
.categories{
    padding-left:1rem;
    display:flex;
    border-bottom: solid var(--grn-1) 0.3rem;
    margin-bottom:4rem;
}
`
const SelectorStyle = styled.p`
        font-family: 'Poppins';
        font-size:2.4rem;
        font-weight:600;
        margin:0;
        margin-bottom: 2rem;
        margin-right:4rem;
        cursor:pointer;
        color:${(props) => props.c === props.category ? "var(--grn-1)" : "black"};
        border-bottom:${(props) => props.c === props.category ? "var(--grn-1)" : "transparent"} solid 0.3rem;
        transition:.3s;
`


export default function MainCategory({ phrase, content }) {
    const [category, setcategory] = useState("");
    const [contentData, setContentData] = useState(content);
    useEffect(() => {
        setContentData(content)
    }, [content]);


    useEffect(() => {
        setContentData(() =>
            content.filter((post) =>
                post.category.match(category)
            )
        );
    }, [category]);

    return (
        <MainCategoryStyle>
            <div className="phrase">{phrase}</div>
            <div className="categories">
                <SelectorStyle category={category} c={""} onClick={() => setcategory("")}>전체</SelectorStyle>
                <SelectorStyle category={category} c={"오프라인"} onClick={() => setcategory("오프라인")}>오프라인</SelectorStyle>
                <SelectorStyle category={category} c={"온라인"} onClick={() => setcategory("온라인")}>온라인</SelectorStyle>
                <SelectorStyle category={category} c={"배달"} onClick={() => setcategory("배달")}>배달</SelectorStyle>
            </div>
            <div className="card-container">
                {contentData.map((post) => (
                    <Link to="/Detail" id={post.id}><Card
                        key={post.id}
                        item={post.item}
                        category={post.category}
                        hot={(post.limit === post.members.length + 1) ? true : false}
                        img={post.img}
                        num={post.members.length + "/" + post.limit}
                    >
                        {post.title}
                    </Card></Link>
                )
                )}
            </div>
        </MainCategoryStyle >
    )
}
