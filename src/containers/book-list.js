import React, { Component } from 'react'
// this is the link between the react and redux
import { connect } from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux'

// Redux serves to construct the application state
// React provides views to display that state
// Redux and React is disconnected only from the use of React-Redux clear
// connection between those twos

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      )
    })
  }

  render () {
    // console.log(this.props.ass)
    return (
      <ul className="list-group-item col-sm-6">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps (state) {
// Whatever is returned here will show as props inside
// of BookList
// if the states changes the BookList automatically re-render

  return {
    // returns the object. It is the glue between react and redux
    // Then will pass to props line 7
    books: state.books
  }
}

// Anything returned from this function will end up as a props
// inside of BookList
function mapDispatchToProps (dispatch) {
  // We never select book is called, the result should be passed
  // to our all reducers. Key: value passed as a props inside the container
  // The propose of bindActionCreators and dispatch to take what gets
  // returned from selectBook and make sure that it flows through all the
  // reducers. It works like a funnel flowing data to reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Redux generate state object in the container books and map that state as props
// to our component.
// State was updated through our reducer our component re-render within our list of books
// using connect function to mapStateToProps to BookList

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
