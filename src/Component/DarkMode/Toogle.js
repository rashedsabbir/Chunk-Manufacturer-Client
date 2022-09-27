import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react';
import './Toogle.css';
function Toogle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);
  return (
    <div className=''>
      <button type='checkbox' className='' onClick={toggleTheme}>
       <FontAwesomeIcon className='bulb text-2xl' icon={faLightbulb} />
        
      </button>
    </div>
  );
}
export default Toogle;