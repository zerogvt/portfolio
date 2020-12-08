import React, { Component } from 'react';

class Tracks extends Component {
    state = { audio: null, playingUrl: null}
    
    trackIcon = track => {
        if (!track.preview_url) {
          return <span>N/A</span>;
        }
        if (
          this.state.audio &&
          this.state.playingUrl === track.preview_url
        ) {
          return <span>| |</span>;
        }
        return <span>&#9654;</span>;
      }

    playTrack = url => () => {
        if (this.state.audio) {
            this.state.audio.pause()
            if (this.state.playingUrl === url) {
                this.setState({ audio: null });
                return;
            }
        }
        const audio = new Audio(url);
        this.setState({playingUrl: url, audio: audio})
        audio.play();
    }
    render(){
        if (!this.props.tracks) return null;
        const tracks = this.props.tracks.tracks
        console.log(tracks)
        return(
            <div>
            {
                tracks.map( track => { 
                    return (
                        <div className='track'
                            onClick={this.playTrack(track.preview_url)}
                        >
                        <img 
                            className='trackImage'
                            src={track.album.images[0].url}
                            alt='track'
                        />
                        <div className='trackText'>
                        <p>{track.name}</p>
                        <p>{this.trackIcon(track)}</p>
                        </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Tracks;
