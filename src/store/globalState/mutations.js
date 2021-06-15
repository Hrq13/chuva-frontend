/*
export function someMutation (state) {
}
*/

export function addComment (state, comment) {
  state.comments += comment
}

export function removeComment (state, index) {
  state.comments = state.comments.splice(index, 0);
}
