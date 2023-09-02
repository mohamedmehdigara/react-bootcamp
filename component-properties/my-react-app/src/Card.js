// Card.js
import React from 'react';
import { Card as AntCard } from 'antd';


const Card = ({ title, description, avatar, cover }) => {
  return (
    <AntCard
      title={title}
      cover={<img alt={title} src={cover} />}
      style={{ width: 300, margin: 20 }}
    >
      <div>
        <img alt={title} src={avatar} style={{ width: 50, height: 50, borderRadius: '50%' }} />
        <p>{description}</p>
      </div>
    </AntCard>
  );
};

export default Card;
