import React, { Component } from 'react';


class App extends Component {
  state = { artistQuery: '' }

  updateArtistQuery = event => {
    this.setState({artistQuery: event.target.value});
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist()
    }
  }

  searchArtist = () => {
    console.log('Will fetch ' + this.state.artistQuery)
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
      </div>
    );
  }
}

export default App;
