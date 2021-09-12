import React from 'react';
import PerfectCircle from './components/PerfectCircle';
const App: React.VFC = () => {
  const animate = {
    scale: [1, 2, 3, 1, 1],
  };
  const transition = {
    duration: 2,
    ease: 'easeInOut',
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: Infinity,
    repeatDelay: 1,
  };
  return <PerfectCircle animate={animate} transition={transition} />;
};

export default App;
