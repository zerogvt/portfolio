import React, { Component } from 'react';

class Tracks extends Component {
    state = { audio: null, playingUrl: null}

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
                        <div className='track'>
                        <h4>{track.name}</h4>
                        <img 
                            className='trackImage'
                            src={track.album.images[0].url}
                            alt='track'
                            onClick={this.playTrack(track.preview_url)}
                        />
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Tracks;
