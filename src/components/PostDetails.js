import React, {Component} from 'react';
import {connect} from 'react-redux';

import { getCommentsByPost, getPost } from '../utils/api';

import NewComment from './NewComment';

function Comments({comments}) {
    return (
        <ul>
            {comments.map(c => <li key={c.id}>{c.body}</li>)}
        </ul>
    )
}

class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: undefined,
            comments: []
        }
    }

    componentDidMount() {
        const {postId} = this.props;

        Promise.all([getPost(postId), getCommentsByPost(postId)])
        .then(([post, comments]) => {
            this.setState(() => ({
                post,
                comments,
            }))
        })
    }

    render() {
        const {post, comments} = this.state;
        if (post === undefined)
            return <p>Something went wrong!</p>

        return(
            <div>
                <h1>{post.title}</h1>

                <Comments comments={comments}/>
                <NewComment />
            </div>
        )
    }
}

function mapStateToProps({}, {id}) {
    return {
        postId: id,
    }
}

export default connect(mapStateToProps)(PostDetails);