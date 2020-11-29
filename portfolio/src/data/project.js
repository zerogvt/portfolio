import portfolio from '../assets/portfolio.png';
import eventfull from '../assets/eventfull.png';
import jenkins from '../assets/jenkins.png';

const PROJECTS = [
    {
        id: 1,
        title: 'This portfollio',
        description: 'A React app that I built, involving JS and core WEB concepts',
        image: portfolio,
        link: "/"
    },
    {
        id: 2,
        title: 'Eventfull',
        description: 'A small application in Golang that can serve as a custom events source for New Relic or any other event sink. A sample events sink server is also included.',
        image: eventfull,
        link: "https://github.com/zerogvt/eventfull"
    },
    {
        id: 3,
        title: 'Jenkins in a box',
        description: 'Containerised Continuous Integration System',
        image: jenkins,
        link: "https://github.com/zerogvt/jenkins-in-a-box"
    },
];

export default PROJECTS;
