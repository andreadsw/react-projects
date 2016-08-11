import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDFk3YpPU1N2apbYQTknFr4IWXWSuS-gAk'

// create a new component. This should produce some HTML
// const nevers change it.
// Create a class component because we need to use state and more advance react
// features
class App extends Component {
  constructor (props) {
    super(props)

    // initial value. Create an object videos is a key of the object. Create an
    // array is the value of the object.
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('beyonce')
  }

  videoSearch (term) {
    // Demonstrate how the Youtube API works here. Then, term is surfbards to search
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      // this line is the same of  key: value this.setState({ videos: videos})
    })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}


// Take this component amd generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.getElementById('root')) // Create instances of App
