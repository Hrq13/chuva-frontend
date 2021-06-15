/*
export function someGetter (state) {
}
*/

export function comments (state) {
  return state.comments
}

export function isEditingComment (state) {
  return state.editingComment ? true : false
}

export function editingComment (state) {
  return state.editingComment
}
