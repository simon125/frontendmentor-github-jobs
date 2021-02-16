import React from 'react';

export type IconName =  'moon' | 'sun' | 'search' | 'filter' | 'map-marker-alt';

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, color = 'inherit', size }) => {
  return <i style={{color}} className={`fas fa-${name}`}/>;
};
