import React, { Component } from 'react'
// this is the link between the react and redux
import { connect } from 'react-redux'

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

// using connect function
export default connect(mapStateToProps)(BookList)
