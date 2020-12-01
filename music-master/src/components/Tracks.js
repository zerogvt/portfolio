import React, { Component } from 'react';

class Tracks extends Component {
    render(){
        if (!this.props.tracks) return null;
        const tracks = this.props.tracks.tracks
        console.log(tracks)
        return(
            <div>
            {
                tracks.map( track => { 
                    return (
                        <div key={track.uri}>
                            <img src={track.album.images[0].url} alt='track' />
                        </div>
                        )
                })
            }
            </div>
        )
    }
}

export default Tracks;
