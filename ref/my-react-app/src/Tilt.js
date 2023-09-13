import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Tilt = ({ children, options }) => {
  const tiltRef = useRef();

  useEffect(() => {
    const tiltElement = tiltRef.current;
    VanillaTilt.init(tiltElement, options);
    return () => {
      tiltElement.vanillaTilt.destroy();
    };
  }, [options]);

  return <div ref={tiltRef}>{children}</div>;
};

export default Tilt;
