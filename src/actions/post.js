import * as API from '../utils/api';
import {formatPost} from '../utils/helpers';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const ADD_NEW_POST = 'ADD_NEW_POST';
export const EDIT_A_POST = 'EDIT_A_POST';
export const DELETE_A_POST = 'DELETE_A_POST';


export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts,
    }
}

function addNewPost(post) {
    return {
        type: ADD_NEW_POST,
        post,
    }
}

function editPost(postId, editInfo) {
    return {
        type: EDIT_A_POST,
        editInfo,
        postId,
    }
}

function deletePost(postId) {
    return {
        type: DELETE_A_POST,
        postId,
    }
}

export function handleDeletePost(post) {
    return (dispatch) => {
        const postId = post.id;
        dispatch(deletePost(postId));
        return API.deletePost(postId)
        .catch(error => {
            console.warn('Error when delete this post: ', error);
            dispatch(addNewPost(post))
            alert('There was an error deleting this post. Try again');
        })
    }
}

export function handleAddNewPost(category, author, title, body) {
    return (dispatch) => {
        const post = formatPost(category, author, title, body);
        const postId = post.id;
        dispatch(addNewPost(post));
        return API.addNewPost(post)
        .catch(error => {
            console.warn('Error when add this post: ', error);
            dispatch(deletePost(postId))
            alert('There was an error adding this post. Try again');
        })
    }
}

/**
 * Create newInfo object from category, title, body.
 * Get currentInfo from database.
 * Update newInfo with reducer.
 * Update newInfo with the database,
 * If any error, update currentInfo with reducer to revert the change.
 * @param {*} postId 
 * @param {*} category 
 * @param {*} title 
 * @param {*} body 
 */
export function handleEditPost(postId, category, title, body) {
    return (dispatch) => {
        const newInfo = {category, title, body};
        return API.getPost(postId).then((result) => {
            const currentInfo = result;
            dispatch(editPost(postId, newInfo));
            return API.editPost(postId, newInfo)
            .catch(error => {
                console.warn('Error when edit this post: ', error);
                dispatch(editPost(postId, currentInfo));
                alert('There was an error editing this post. Try again');
            })
        })
        .catch(error => {
            console.warn('An error happened when edit this post: ', error);
            alert('There was an error editing this post. Try again');
        })
    }
}