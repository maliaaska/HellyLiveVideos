import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAnZYyZ23_4bCbXwJUgfj6JWTEAnWrrTZM'; 



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTsearch({key: API_KEY, term: 'Hemp gru'}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos })
    });
  }


  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    ); 
  }
} 

ReactDOM.render(<App />, document.querySelector('.container'));
