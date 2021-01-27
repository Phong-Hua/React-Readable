import { RECEIVE_POSTS, DELETE_A_POST, ADD_NEW_POST, EDIT_A_POST } from '../actions/post';

export default function reducer(state = [], action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            return [...state, ...action.posts];
        case DELETE_A_POST:
            return state.filter(post => post.id !== action.postId);
        case ADD_NEW_POST:
            return [...state, action.post];
        case EDIT_A_POST:
            {
                return state.map(p => {
                    if (p.id !== action.postId)
                        return p;
                    return Object.assign({}, p, action.editInfo);
                });
            }
        default:
            return state;
    }
}