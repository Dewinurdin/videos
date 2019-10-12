import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    // on initial load, render this keyword as a default search on the screen
    this.onTermSubmit('funny video');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    // console.log(response);
    this.setState({ 
      videos: response.data.items,
      // when we do a search go ahead and use the first video as a default set 
      // and make it appear on the screen
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    // console.log('From the App!' , video);
    this.setState({ selectedVideo: video });
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                // passing down function from parent to child
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos} 
              />
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;