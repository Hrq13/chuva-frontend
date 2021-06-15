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
  state.comments.unshift(newComment)
}

export function removeComment (state, _comment) {
  let deleted = 0

  state.comments.map((comment, index) => {
    if (comment === _comment) {
      state.comments.splice(index, 1)
      deleted++
      return
    }
  })

  if (deleted === 1) return

  console.error('[ERROR] Comment could not be removed');
}

export function editComment (state, editedComment) {
  let found = false

  state.comments.map((comment, index) => {
    if (comment === state.editingComment) {
      found = true
      comment.author = editedComment.author
      comment.subject = editedComment.subject
      comment.text = editedComment.text
      return
    }
  })
  state.editingComment = null

  if (found) return

  console.error('[ERROR] Could not edit comment');
}

export function editingComment (state, comment) {
  state.editingComment = comment
}
