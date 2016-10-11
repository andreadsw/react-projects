import React, { Component } from 'react'
// this is the link between the react and redux
import { connect } from 'react-redux'

// Redux serves to construct the application state
// React provides views to display that state
// Redux and React is disconnected only from the use of React-Redux clear
// connection between those twos

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render () {
    // console.log(this.props.ass)
    return (
      <ul className="list-group-item col-sm-4">
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

// Redux generate state object in the container books and map that state as props
// to our component.
// State was updated through our reducer our component re-render within our list of books
// using connect function to mapStateToProps to BookList
export default connect(mapStateToProps)(BookList)
