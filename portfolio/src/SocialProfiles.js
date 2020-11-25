import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';


class SocialProfile extends Component {
    render() {
        const { id, link, image, description } = this.props.profile;
        return(
            <div key={id} style={{display: "inline-block", width: 60, margin: 10, marginTop: 40}} >
                <a href={link}>
                    <img 
                        src={image}
                        alt={description}
                        style={{ width: 40, height: 40}}
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
