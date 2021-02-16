import React from 'react';
import './Input.style.css';

interface InputProps {
  value: string;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeoholder?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<InputProps> = ({
  placeoholder,
  style,
  changeHandler,
  value,
}) => {
  return (
    <>
      <input
        value={value}
        className="input"
        type="text"
        placeholder={placeoholder}
        style={style}
        onChange={changeHandler}
      />
    </>
  );
};
