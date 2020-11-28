import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png';
import Joke from './Joke';
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
                <img src={profile} alt='profile' className='profile'/>
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
                                and a secret desire for Elixir.</p>
                            <p>I like building things that are easy to maintain.</p>
                            <p>KISS (Keep It Small And Simple) philosophy resonates deeply with me.</p>
                            <p>I like working in an agile way, adding a bit of value on every iteration.</p>
                            <p>I love learning new technologies and diving deeper in familiar ones.</p>
                            <p>I have a good understanding of various fields ranging from essential algorithms 
                                up to networking, systems and reliability engineering, continuous integration and 
                                web development. And I love to use it all and expand on them.</p>
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
                <Joke />
            </div>
        )
    }
}

export default App
