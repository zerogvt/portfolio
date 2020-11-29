import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
};

class Header extends Component {
    render() {
        return (
            <div className='nav'>
                <h3 style={style}><Link exact to='/'>Home </Link></h3>
                <h3 style={style}><Link to='/joke'>Joke</Link></h3>
            </div>
        )
    }
}

export default Header;
