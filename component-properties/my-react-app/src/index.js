import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import 'antd/dist/reset.css'; // Import Ant Design CSS
import Card from './Card'; // Import your Card component

const cards = [
    {
        title: 'Elon Musk',
        description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX.',
        avatar: 'https://i.imgur.com/KN5KC9i.jpeg',
        cover: 'https://i.imgur.com/r7A2qYi.jpg'
    },
    {
        title: 'Albert Einstein',
        description: 'Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics.',
        avatar: 'https://i.imgur.com/tXWU1Zj.jpeg',
        cover: 'https://i.imgur.com/TqPdNrR.jpg'
    },
    {
        title: 'Nikola Tesla',
        description: 'Nikola Tesla was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current electricity supply system.',
        avatar: 'https://i.imgur.com/S3b0qFS.jpeg',
        cover: 'https://i.imgur.com/BHVYN.jpg'
    }
];

const App = () => (
    <div>
        {cards && cards.map((person, index) => (
            <Card
                key={index}
                title={person.title}
                description={person.description}
                avatar={person.avatar}
                cover={person.cover}
            />
        ))}
    </div>
);

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);















