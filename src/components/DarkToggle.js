import React from 'react';

import { ThemeContext } from './Layout/Layout';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  // if (!colorMode) {
  //   return null;
  // }

  return (
    <>
      <h1>HIAS DAHSDHGASDHAYSDYHDAS</h1>
      <label>
        <input
          type="checkbox"
          checked={colorMode === 'dark'}
          onClick={ev => {
            setColorMode(ev.target.checked ? 'dark' : 'light');
          }}
        />{' '}
        Dark
      </label>
    </>
  );
};

// can be deleted

export default DarkToggle;