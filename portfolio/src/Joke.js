import React, { Component } from 'react';

class Joke extends Component {
    state = { joke: {}};

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json}));
    };

    render() {
        return(
            <div className='joke'>
                <h4>Thanks for dropping by. Here's a random joke:</h4>
                <p>{this.state.joke.setup}</p>
                <p><em>{this.state.joke.punchline}</em></p>
            </div>
        )
    }
}

export default Joke;