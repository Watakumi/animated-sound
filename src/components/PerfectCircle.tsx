import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  animate: {
    scale?: number[];
    rotate?: number[];
    borderRadius?: string[];
  };
  transition: {
    duration?: number;
    ease?: string;
    times?: number[];
    repeat?: number;
    repeatDelay?: number;
  };
};

const styles = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
};

const PerfectCircle: React.VFC<Props> = ({ animate, transition }) => {
  return (
    <motion.div style={styles} animate={animate} transition={transition} />
  );
};

export default PerfectCircle;
