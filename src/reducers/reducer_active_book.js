// State argument is not application state, only the state
// this reducer is responsible for

// it always has two arguments
export default function (state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECETED':
      return action.payload
  }
  // return current state
  return state
}
