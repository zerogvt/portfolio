import React, { Component } from 'react';

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
                <p>
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
                </p>
            </div>
        )
    }
}

export default App
