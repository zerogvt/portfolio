import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Header from './Header';
import '../index.css';

class App extends Component {
    state = {
        displayBio: false
    }
    toggleBio = () => {
        this.setState({
            displayBio: !this.state.displayBio
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='bioImage'>
                    <img src={profile} alt='profile' className='profile'/>
                </div>
                <div className="bioText">
                <h1>Hello!</h1>
                <p>
                    My name is Vasilis and I am a software engineer.
                </p>
                <p>
                    I'm always looking forward to working on 
                    challenging and meaningfull projects.
                </p>
                {
                    this.state.displayBio ?
                    (
                        <div>
                            <p>I split time between Ireland and Greece.</p>
                            <p>I code every day.</p>
                            <p>My favorite language is Python but I also have a crush on React, Golang 
                                and a secret desire for Elixir and all things functional.</p>
                            <p>I like building things that are easy to maintain.</p>
                            <p>KISS (Keep It Small And Simple) philosophy resonates deeply with me.</p>
                            <p>I like working in an agile way, adding a bit of value on every iteration.</p>
                            <p>I love learning new technologies and diving deeper in familiar ones.</p>
                            <p>I have a good understanding of various fields such as essential algorithms, 
                                networking, systems, reliability engineering, continuous integration,
                                cloud, kubernetes and web development...and I love to use it all and expand on them.</p>
                            <p>Besides Software Engineering I also like trekking and sailing.</p>
                            <button onClick={this.toggleBio}> Less </button>
                        </div>
                    ) :
                    <div>
                    <button onClick={this.toggleBio}> More </button>
                    </div>
                }
                </div>
                <hr/>
                <Projects />
                <SocialProfiles />
            </div>
        )
    }
}

export default App
