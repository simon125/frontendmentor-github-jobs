import React, { useState } from 'react';
import './ToggleButton.style.css';

export const ToggleButton: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = () => {
    setValue((prev) => (prev ? 0 : 1));
  };

  return (
    <>
      <label className="toggle-checkbox__container" htmlFor="toggle-checkbox">
        <input
          style={{ visibility: 'hidden', width: 0, margin: 0 }}
          value={value}
          onChange={handleChange}
          checked={!!value}
          type="checkbox"
          id="toggle-checkbox"
        />
        <span className="toggle-checkbox__bullet"></span>
      </label>
    </>
  );
};
