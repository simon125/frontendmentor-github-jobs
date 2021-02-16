import React from 'react';
import { Icon, IconName } from '../Icon/Icon';
import './Button.style.css';

type ButtonType = 'primary' | 'secondary';

interface ButtonProps {
  label?: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon?: IconName;
  type?: ButtonType;
  path?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  clickHandler,
  icon,
  type = 'primary',
  path,
}) => {
    const iconColor = type === 'primary' ? '#fff' : '#5964e0';
  return (
    <button onClick={clickHandler} className={`button button__${type}`}>
      {icon && (
        <span style={{ marginRight: label ? 5 : 0 }}>
          <Icon name={icon} color={iconColor} />
        </span>
      )}
      {label}
    </button>
  );
};
