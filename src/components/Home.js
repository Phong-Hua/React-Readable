import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import CategoryOverview from './CategoryOverview';
import PostOverview from './PostOverview1';

const CategoriesDiv = styled.div`
    border: 1px solid #c3c3c3;
    display: flex;
    justify-content: flex-start;
`

const PostsDiv = styled.div`
    border: 1px solid #c3c3c3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const FloatingButton = styled.button`

    position: fixed;
    height: 40px;
    width: 100px;
    bottom: 50px;
    // left: 50px;   
`

function Categories({categories}) {
    return (
        <div>
            <h1>Categories</h1>
            <CategoriesDiv>
                {categories.map(category => <CategoryOverview key={category.name} category={category}/>)}
            </CategoriesDiv>
        </div>
    )
}

function Posts({posts}) {
    return (
        <div>
            <h1>Posts</h1>
            <PostsDiv>
                {posts.map(post => <PostOverview key={post.id} post={post}/>)}
            </PostsDiv>
        </div>
    )
}

function Home(props) {
    const {categories, posts} = props;
    return(
        <div>
            <Categories categories={categories} />
            <Posts posts={posts} />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <FloatingButton>Make new post</FloatingButton>
            </div>
        </div>
    )
}

function mapStateToProps({categories, posts}) {
    return {
        categories,
        posts
    }
}

export default connect(mapStateToProps)(Home);