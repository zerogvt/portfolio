import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            displayBio: true
        };
    }
    render() {
        return(
            <div>
                <h1>Hello!</h1>
                <p>
                    My name is Vasilis and I am a software engineer.
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
                        </div>
                    ) :
                    null
                }
                <p>
                    I'm always looking forward to working on 
                    challenging and meaningfull projects.
                </p>
                <p>
                    Thanks for dropping by.
                </p>
            </div>
        )
    }
}

export default App
