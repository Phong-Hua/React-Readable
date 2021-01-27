import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import PostOverview from './PostOverview2';
import {getPostByCategory} from '../utils/api';



function Posts({posts}) {
    return (
        <ul>
            {posts.map(p => (
                <PostOverview key={p.id} post={p} />
            ))}
        </ul>
    )
}

class CategoryDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        const {name} = this.props;
        getPostByCategory(name).then((posts) => {
            this.setState(() => ({
                posts,
            }))
        })
    }

    gotoNewPost = (e) => {
        e.preventDefault();
        this.props.history.push('/posts/');
    }


    render() {
        const {name} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <Posts posts={this.state.posts} />
                <button onClick={this.gotoNewPost}>Make new post</button>
            </div>
        )
    }
}

function mapStateToProps({}, {name}) {
    return {
        name,
    }
}


export default withRouter(connect(mapStateToProps)(CategoryDetails));