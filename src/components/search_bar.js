import React, { Component } from 'react'
// This means pull off only the Component from React = { Component }

class SearchBar extends Component {
  constructor (props) {
    super(props) // super is parent of object
    // Each class has your own property state.
    // create a new object. Passing a term property
    this.state = { term: ''}
  }

  render () {
    return (
      <div>
      <input
      value={this.state.term}
      onChange ={event => this.setState({ term: event.target.value})}
      />
      Value of the input: {this.state.term}
      </div>
    )
    // return <input onChange =(event => this.setState({ term: event.target.value})) />
    // this here is the SearchBar here.
    // onChage is a React event. You can find it inside the react documentation
  }

  // You can eleminate the fuction event
  // onInputChange(event) {
  //   console.log(event.target.value)
  //
  // }
}

export default SearchBar
// you can use export to use
