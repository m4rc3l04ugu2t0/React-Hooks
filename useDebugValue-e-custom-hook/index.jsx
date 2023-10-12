import React from 'react'
import ReactDOM from 'react-dom'

import { useEffect, useState, useDebugValue } from 'react'

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue)
  
  useDebugValue('Olá', salutation => salutation + '👋')
  
  useEffect(() => {
    let isMounted = true;
    const matchMedia = window.matchMedia(queryValue);

    const handleChange = () => {
      if (!isMounted) return;
      setMatch(matchMedia.matches);
    };

    matchMedia.addEventListener('change', handleChange);
    setMatch(matchMedia.matches);

    return () => {
      isMounted = false;
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [queryValue]);

  return match
}

const App = () => {
  const huge = useMediaQuery('(min-width: 980px)');
  const big = useMediaQuery('(max-width: 979px) and (min-width: 768px)');
  const medium = useMediaQuery('(max-width: 767px) and (min-width: 321px)');
  const small = useMediaQuery('(max-width: 321px)');
  
  const backgroundColor = huge ? 'green' : big ? 'red' : medium ? 'yellow' : small ? 'purple' : null;
  
  return (
    <h1 style={{ fontSize: '60px', backgroundColor }}>
      Hello World!
    </h1>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('react-app')
)