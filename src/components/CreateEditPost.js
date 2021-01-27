import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';

import {getPost} from '../utils/api';
import { handleAddNewPost, handleEditPost } from '../actions/post';
import { borderRadius, border, buttonHeight, blue, white, red, } from '../utils/style'

import SubmitButton from './SubmitButton';

const PostDiv = styled.div`

    margin: auto;       // center the div
    display: flex;
    flex-direction: column;
    align-items: center;
    border: ${border};
    border-radius: ${borderRadius};
    text-align: center;
    width: 500px;
    height: 650px;
`

const BodyInput = styled.textarea`
    resize: none;
    border-radius: ${borderRadius};
    margin-left: 10px;
    margin-right: 10px;
    width: 400px;
    height: 100px;
`

const TitleInput = styled.input`
    border-radius: ${borderRadius};
    width: 400px;
    height: ${buttonHeight};
    margin-left: 10px;
    margin-right: 10px;
`

const CategoryInput = styled.select`
    width: 400px;
    height: ${buttonHeight};
    border: ${border};
    margin-left: 10px;
    margin-right: 10px;
`

class PostDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: this.props.categories[0].name,
            title: '',
            body: '',
            showCategoryError: false,
            showTitleError: false,
            showBodyError: false,
            toHome: false,
        }
    }

    componentDidMount() {
        const {id} = this.props;
        if (id !== undefined)
        {
            getPost(id).then((result) => {
                this.setState(() => ({
                    category: result.category,
                    title: result.title,
                    body: result.body,
                }))
            })
        }
    }

    handleCategoryChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({
            category: val,
        }))
    }

    handleTitleChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({
            title: val,
        }))
    }

    handleBodyChange = (e) => {
        const val = e.target.value;
        this.setState(() => ({
            body: val,
        }))
    }

    renderCategories = () => {
        const { categories } = this.props;
        return (
            <CategoryInput value={this.state.category} onChange={this.handleCategoryChange}>
                {categories.map(cat =>
                    <option key={cat.name}
                        value={cat.name}>
                        {cat.name}
                    </option>)}
            </CategoryInput>
        )
    }

    renderTitle = () => {
        return (
            <TitleInput type='text'
                value={this.state.title}
                onChange={this.handleTitleChange}
            />
        )
    }

    renderBody = () => {
        return (
            <BodyInput

                value={this.state.body}
                onChange={this.handleBodyChange} />
        )
    }

    handleSubmit = () => {
        const { authedUser, id, addNewPost, editPost } = this.props;

        const category = this.state.category.trim();
        const title = this.state.title.trim();
        const body = this.state.body.trim();

        const titleValid = title.length !== 0;
        const bodyValid = body.length !== 0;
        const categoryValid = category.length !== 0;

        this.setState(() => ({
            showTitleError: !titleValid,
            showBodyError: !bodyValid,
            showCategoryError: !categoryValid,
        }))

        if (categoryValid && bodyValid && titleValid) {
            if (id === undefined)
                addNewPost(category, authedUser, title, body);
            else
                editPost(id, category, title, body);

            this.setState(() => ({
                title: '',
                body: '',
                toHome: true,
            }))
        }
    }

    render() {

        if (this.state.toHome)
            return <Redirect to='/' />

        return (
            <PostDiv>
                <h1>Create Edit Post</h1>

                <h2>Category</h2>
                {this.renderCategories()}
                {this.state.showCategoryError && <p style={{ color: red }}>Category is empty</p>}


                <h2>Title</h2>
                {this.renderTitle()}
                {this.state.showTitleError && <p style={{ color: red, marginTop: 5, marginBottom: 0}}>Title is empty</p>}

                <h2>Body</h2>
                {this.renderBody()}
                {this.state.showBodyError && <p style={{ color: red, marginTop: 5, marginBottom: 0 }}>Body is empty</p>}

                <SubmitButton style={{marginTop: 20}} submitAction={this.handleSubmit} />

            </PostDiv>
        )
    }
}

function mapStateToProps({ categories, authedUser }, {id}) {
    return {
        categories,
        authedUser,
        id,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNewPost: (category, author, title, body) =>
            dispatch(handleAddNewPost(category, author, title, body)),
        editPost: (postId, category, title, body) => 
            dispatch(handleEditPost(postId, category, title, body)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);