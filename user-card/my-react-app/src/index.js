import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Avatar } from 'antd';
import "antd/dist/reset.css";

const { Meta } = Card;

const card = {
    title: 'Elon Musk',
    description: 'Elon Reeve Musk FRS is a business magnate, industrial designer, and engineer. He is the founder, CEO, CTO, and chief designer of SpaceX',
    avatar: 'http://www.gstatic.com/tv/thumb/persons/487130/487130_v9_bb.jpg',
    cover: 'https://media.vanityfair.com/photos/574f453fbdf148e4205f29df/16:9/w_1200,h_630,c_limit/hive-contributor-profile-elon-musk.jpg'
};

const App = () => {
    return (
      <div>
        <Card
          title={card.title}
          cover={<img alt="User Cover" src={card.cover} />}
          style={{ width: 300 }}
        >
          <Card.Meta
            avatar={<img alt="User Avatar" src={card.avatar} />}
            description={card.description}
          />
        </Card>
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
  