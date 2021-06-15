/*
export function someMutation (state) {
}
*/

export function addComment (state, { author, subject, text }) {
  const newComment = {
    author: author,
    subject: subject,
    text: text,
    likes: 0,
    replies: []
  }
  console.log(newComment)
  state.comments.push(newComment)
}

export function removeComment (state, index) {
  const comments = [...state.comments]
  console.log(comments)
  comments.splice(index, 0)
  state.comments = comments
}
