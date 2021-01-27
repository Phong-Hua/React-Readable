import { combineReducers } from 'redux';
import {loadingBarReducer} from 'react-redux-loading';
import categories from './categories';
import posts from './post';
import authedUser from './authedUser';

export default combineReducers({categories, authedUser, posts, loadingBar: loadingBarReducer});