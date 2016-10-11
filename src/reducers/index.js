import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'


const rootReducer = combineReducers({
  /* Add Book through the combineReducers
     reducers will add a key inside the global state
     where the key is books and the value is BooksReducer.
     The BooksReducer is the array of books
  */
  books: BooksReducer,
})

export default rootReducer
