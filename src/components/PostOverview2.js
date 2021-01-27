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

const Body = styled.input`
    border: 0px;
    height: 40px;
    margin: 10px;
    read-only: true;
    width: 100%;
`

const DummyDiv = styled.div`
    display: 'flex';
    width: 5%;
`

const BodyDiv = styled.div`
    display: 'flex';
`

export default function Post({post}){
    const {body} = post;
    return (
        <PostDiv>
            <PostOverviewBase post={post}/>
            <div style={{display: 'flex', marginTop: -15}}>
                <DummyDiv/>
                <BodyDiv>
                    <p style={{margin: 10}}>{body.length <= 40 ? body : body.substring(0, 39).concat('...')}</p>
                </BodyDiv>
                <DummyDiv/>
            </div>
        </PostDiv>
    )
}