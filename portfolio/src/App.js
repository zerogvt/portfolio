import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'
import './index.css'

class App extends Component {
    state = {
        displayBio: true
    }
    toggleBio = () => {
        console.log(this)
        this.setState({
            displayBio: !this.state.displayBio
        })
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>
                    My name is Vasilis and I am a software engineer.
                </p>
                <p>
                    I'm always looking forward to working on 
                    challenging and meaningfull projects.
                </p>
                <p>
                    Thanks for dropping by.
                </p>
                {
                    this.state.displayBio ?
                    (
                        <div>
                            <p>I split time between Ireland and Greece.</p>
                            <p>I code every day.</p>
                            <p>My favorite language is Python but I also love working with JS and Golang.</p>
                            <p>I also love/need learning new technologies.</p>
                            <p>Besides Software Engineering I also like trekking and sailing.</p>
                            <button onClick={this.toggleBio}> Less </button>
                        </div>
                    ) :
                    <div>
                    <button onClick={this.toggleBio}> More </button>
                    </div>
                }
                <hr/>
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App
