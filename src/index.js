import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoDetail from "./components/video_detail";
import VideoList from "./components/video_list";
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyDOzdC6c03o88CTMg6IiowWgnmDSAX94co";

class AppComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: ""
    }

    this.videoSearch('surfing');
  }

  videoSearch(query) {
    YTSearch({key: API_KEY, term: query}, (videos, err) => {
      if (err) {
        throw err;
        console.log(err);
      }
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const debouncedVideoSearch = _.debounce( (query) => {this.videoSearch(query)}, 300)

    return (
      <div>
        <SearchBar searchVideo={debouncedVideoSearch} />
        <br/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={(selectedVideo) => this.setState({selectedVideo: selectedVideo})}
           />
        </div>
      </div>
    );
  }
}

export default AppComponent

ReactDOM.render(<AppComponent />, document.querySelector(".container"))
