import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../utils/helpers';
import { gray } from '../utils/style';

const PostDiv = styled.div`
    display: flex;
`

const LeftDiv = styled.div`
    display: flex;
    width: 5%;
    justify-content: center;
    align-items: center;
`

const MiddleDiv = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    margin-left: 10px;
`

const RightDiv = styled.div`
    display: flex;
    width: 25%;
    // justify-content: center;
    align-items: center;
`


function PostOverview({ id, title, author, voteScore, commentCount, timestamp, history }) {

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/posts/${id}`);
    }

    return (
        <PostDiv>
            <LeftDiv>
                <h2>{voteScore}</h2>
            </LeftDiv>
            <MiddleDiv>
                <h2 onClick={handleClick}>{title}</h2>
                <div style={{ display: 'flex'}}>
                    <p style={{ fontWeight: 'bold', marginTop: -10 }}>{author}</p>
                    <p style={{ color: gray, marginLeft: 10, marginTop: -10 }}>{formatDate(timestamp)}</p>
                </div>
            </MiddleDiv>
            <RightDiv>
                <h3>
                    {commentCount <= 1 ? `${commentCount} comment` : `${commentCount} comments`}
                </h3>
            </RightDiv>

        </PostDiv>
    )

}

function mapStateToProps({}, {post}) {
    return {
        id: post.id,
        title: post.title,
        author: post.author,
        voteScore: post.voteScore,
        commentCount: post.commentCount,
        timestamp: post.timestamp,
    }
}

export default withRouter(connect(mapStateToProps)(PostOverview));