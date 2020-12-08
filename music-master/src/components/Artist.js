import React, { Component } from 'react';

class Artist extends Component {
    render(){
        if (this.props.artist) {
            const { images, name, followers, genres } = this.props.artist;
            return(
                <div>
                    <h2>{name}</h2>
                    <p>{followers.total} followers</p>
                    <p>{genres.join(', ')}</p>
                    <img src={images[0].url}
                    alt='artist-profile'
                    className='artistImage'/>
                </div>
            )
        }
        return null;
    }
}

export default Artist;
