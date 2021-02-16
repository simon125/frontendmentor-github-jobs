import React from 'react';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import { ReactComponent as Shape1 } from '../../assets/shape1.svg';
import { ReactComponent as Shape2 } from '../../assets/shape2.svg';
import { ReactComponent as Shape3 } from '../../assets/shape3.svg';

import './AppHeader.style.css';
import { Icon } from '../Icon/Icon';

export const AppHeader: React.FC = () => {
  return (
    <header className="haeder">
      <h1 className="headr__website-name">devjobs</h1>
      <div className="header__shapes-container">
        <Shape1 />
        <Shape2 />
        <Shape3 />
      </div>
      <div className="header__mode-toggle">
        <Icon name="sun" color="#fff" />
        <span className="header__button-wrapper">
          <ToggleButton />
        </span>
        <Icon name="moon" color="#fff" />
      </div>
    </header>
  );
};
