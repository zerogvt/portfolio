import React, { Component } from 'react';
import PROJECTS from '../data/project';

class Project extends Component {
    render() {
        const {title, image, description, tags, link} = this.props.project;
        return (
            <div style={{display: "inline-block", "vertical-align": 'text-top', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <a href={link}>
                    <img src={image} alt='profile' style={{width: 150, height:150}} />
                </a>
                <p>{description}</p>
                <p className='tags'> { tags ? tags.join(', ') : "" } </p>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted projects</h2>
                <div>
                    {
                        PROJECTS.map( PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
