import {receiveCategories} from './categories';
import {receivePosts} from './post';
import {setAuthedUser} from './authedUser';
import * as API from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';

const AUTHED_USER = 'thingone';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return Promise.all([API.getAllCategories(), API.getAllPosts()])
        .then(([categories, posts]) => {
            dispatch(receiveCategories(categories));
            dispatch(receivePosts(posts));
            dispatch(setAuthedUser(AUTHED_USER));
            dispatch(hideLoading());
        })
    }
}