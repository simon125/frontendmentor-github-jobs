import React from 'react';
import { Button, Card, Icon, Input } from '../../../components';

const CARD_STYLE:React.CSSProperties = { height: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center' };

export const SearchAndFilterBar: React.FC = () => {
  return (
    <Card style={CARD_STYLE}>
      <Input
        changeHandler={() => console.log(123)}
        value={''}
        placeoholder="Filter by title..."
      />
      <span>
        <Icon name="filter" color="#999" />
      </span>
      <Button label="" icon="search" clickHandler={() => console.log(123)} />
    </Card>
  );
};
