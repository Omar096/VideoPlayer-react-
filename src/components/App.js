import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../Apis/Youtube";
import VideoList from "./Videolist";
import VideoDet from "./VideoDet";
class App extends React.Component {
  state = { videos: [], VideoSelect: null };

  componentDidMount(){
    this.OnTermSubmit('car')
  }
  OnTermSubmit = async (term) => {
    //youtube now is instance of axios
    const responde = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: responde.data.items,
      VideoSelect: responde.data.items[0]
    });
  };
  onVideoSelect = (video) => {
    this.setState({ VideoSelect: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar OnFormSubmit={this.OnTermSubmit} />
        <div class="ui grid">
          <div className='ui row'>
            <div className="eleven wide column">
              <VideoDet video={this.state.VideoSelect} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                Video={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
