
const api = 'http://localhost:3001' || `${process.env.REACT_APP_BACKEND}`;

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}


/********************************************************
 ******************************************************** 
 CATEGORIES SECTION
 ********************************************************
 ********************************************************/
/**
 * Get all categories.
 * Return an array of categories.
 */
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

/********************************************************
 ******************************************************** 
 END OF CATEGORIES SECTION
 ********************************************************
 ********************************************************/

/********************************************************
 ******************************************************** 
 POST SECTION
 ********************************************************
 ********************************************************/

/**
 * Get all posts.
 * Return an array of posts.
 */
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * Get all of the posts for a particular category
 * @param {*} bookId 
 */
export const getPostByCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
* Get the details of a single post.
* @param {*} postId 
*/
export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * Delete a post with postId from database.
 * @param {*} postId 
 */
export const deletePost = (postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())


/**
 * Adding a new post to database.
 * @param {*} post : an object.
 */
export const addNewPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)

export const editPost = (id, post) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())

/********************************************************
 ********************************************************
 END OF POST SECTION
 ********************************************************
 ********************************************************/


/********************************************************
 ******************************************************** 
 COMMENT SECTION
 ********************************************************
 ********************************************************/

/**
* Get all the comments for a single post
* Return an array of comments.
*/
export const getCommentsByPost = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)


/**
 * Delete a comment with commentId from database.
 * @param {*} commentId 
 */
export const deleteComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())

/********************************************************
 ********************************************************
 END OF COMMENT SECTION
 ********************************************************
 ********************************************************/