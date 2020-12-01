import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

const API_URL = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
  state = { artistQuery: '', artist: null, tracks: null}

  updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist()
    }
  }

  searchArtist = () => {
    if (this.state.artistQuery === "") {
      return
    }
    fetch(`${API_URL}/artist/${this.state.artistQuery}`)
    .then(response => {
        if (response.status < 300) {
          return response.json()
        }
        throw Error(response.statusText)
      })
    .then((json) => {
      console.log(json);
      if (json.artists.total > 0) {
        const artist = json.artists.items[0];
        this.setState({ artist: artist})
        fetch(`${API_URL}/artist/${artist.id}/top-tracks`)
        .then( response => response.json())
        .then( json => this.setState({ tracks: json}))
        .catch(error => alert(error.message))
      }
    })
    .catch(error => alert(error.message))
    .catch(httpError => () => {
      console.log()
    })
  }

  render(){
    return(
      <div>
        <h2>Musicorama</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an artist'
        />
        <button onClick={this.searchArtist}>
          Search
        </button>
          <Artist artist={this.state.artist} />
          <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
