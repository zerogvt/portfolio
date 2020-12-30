import portfolio from '../assets/portfolio.png';
import eventfull from '../assets/eventfull.png';
import jenkins from '../assets/jenkins.png';
import musicorama from '../assets/musicorama.png';
import newsdrops from '../assets/newsdrops.png';


const PROJECTS = [
    {
        id: 1,
        title: 'This portfollio',
        description: 'A single page application that I built while learning React.',
        tags: ['React', 'JS', 'web'],
        image: portfolio,
        link: "/"
    },
    {
        id: 2,
        title: 'Newsdrops',
        description: ['A news frontpage site similar to Hackernews'],
        tags: ['Django', 'python', 'web', 'heroku'],
        image: newsdrops,
        link: "https://newsdrops.herokuapp.com/"
    },
    {
        id: 3,
        title: 'Eventfull',
        description: ['A small application in Golang that can serve as a custom events source ',
                     'for New Relic or any other event sink. A sample events sink server is also included. '],
        tags: ['Golang', 'Reliability Engineering'],
        image: eventfull,
        link: "https://github.com/zerogvt/eventfull"
    },
    {
        id: 4,
        title: 'Jenkins in a box',
        description: 'Containerised Continuous Integration System.',
        tags: ['DevOps', 'Continuous Integration'],
        image: jenkins,
        link: "https://github.com/zerogvt/jenkins-in-a-box"
    },
    {
        id: 5,
        title: 'Musicorama',
        description: 'Search Music Artists.',
        tags: ['WEB', 'React', 'spotify'],
        image: musicorama,
        link: "http://musicorama.surge.sh"
    },
];

export default PROJECTS;
