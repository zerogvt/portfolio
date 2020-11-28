import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';


class SocialProfile extends Component {
    render() {
        const { id, link, image, description } = this.props.profile;
        return(
            <div className='social-profile' key={id}>
                <a href={link} >
                    <img 
                        className='social-profile-img'
                        src={image}
                        alt={description}
                    />
                </a>
            </div>
        )
    }
}

class SocialProfiles extends Component {
    render(){
        return(
            <div>
                {
                SOCIAL_PROFILES.map(PROFILE => 
                    <SocialProfile key={PROFILE.id} profile={PROFILE} />)
                }
            </div>
        )
    }
}

export default SocialProfiles;
