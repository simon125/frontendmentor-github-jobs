import React from 'react';
import './Card.style.css';

interface CardProps {
  children: React.ReactChild | React.ReactChild[];
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <div className="card" style={style}>{children}</div>;
};
