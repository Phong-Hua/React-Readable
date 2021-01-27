import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PostOverviewBase from './PostOverviewBase';
import {blue, lightBlue, borderRadius, border} from '../utils/style'

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: ${border};
`
const CategoryButton = styled.button`
    background-color: ${lightBlue};
    border-radius: ${borderRadius};
    color: ${blue};
    height: 40px;
    margin: 10px;
`
const DummyDiv = styled.div`
    display: 'flex';
    width: 5%;
`

const ButtonDiv = styled.div`
    display: 'flex';
`

export default function Post({post}){
    const {category} = post;
    return (
        <PostDiv>
            <PostOverviewBase post={post}/>
            <div style={{display: 'flex', marginTop: -15}}>
                <DummyDiv/>
                <ButtonDiv>
                    <CategoryButton>{category}</CategoryButton>
                </ButtonDiv>  
                <DummyDiv/>
            </div>
        </PostDiv>
    )
}