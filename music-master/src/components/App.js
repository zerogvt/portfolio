import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

const API_URL = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
  state = { artist: null, tracks: null}

  searchArtist = (artistQuery) => {
    if (artistQuery === "") {
      return
    }
    fetch(`${API_URL}/artist/${artistQuery}`)
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
          <Search searchArtist={this.searchArtist} />
          <Artist artist={this.state.artist} />
          <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;
