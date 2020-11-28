import React, { Component } from 'react';

class Joke extends Component {
    state = { joke: {}};

    fetchJoke = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json}));
    }
    componentDidMount() {
        this.fetchJoke();
    };

    render() {
        const { setup, punchline } = this.state.joke
        return(
            <div className='joke'>
                <h4>Thanks for dropping by. Here's a random joke:</h4>
                <p>{setup}</p>
                <p><em>{punchline}</em></p>
                <div>
                    <button onClick={this.fetchJoke}> Give me another one</button>
                </div>
            </div>
        )
    }
}

export default Joke;