import uuid from 'react-uuid';

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatPost(category, author, title, body) {
  const timestamp = Date.now();
  const id = uuid();
  return {
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore: 0,
    deleted: false,
    commentCount: 0,
  }
}
