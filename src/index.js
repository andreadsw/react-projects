import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyDFk3YpPU1N2apbYQTknFr4IWXWSuS-gAk'



// create a new component. This should produce some HTML
// const nevers change it.
// Create a class component because we need to use state and more advance react
// features
class App extends Component {
  constructor (props) {
    super(props)

    // initial value. Create an object videos is a key of the object. Create an
    //array is the value of the object.
    this.state = { videos: [] }
    // Demonstrate how the Youtube API works here. Then, term is surfbards to search
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos })
      // this line is the same of  key: value this.setState({ videos: videos})
    })
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos= {this.state.videos} />
      </div>
    )
  }
}


// Take this component amd generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.getElementById('root')) // Create instances of App
