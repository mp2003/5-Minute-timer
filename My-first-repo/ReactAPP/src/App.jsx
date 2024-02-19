import { throttle } from 'lodash';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const [mousePos, setMousePos] = useState({
    x: 0, y: 0
  });
  const [text, settext] = useState("default");

  useEffect(() => {
    const OnMouseMove = throttle((e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      });
    }, 50);
    window.addEventListener('mousemove', OnMouseMove);

    return () => {
      window.removeEventListener('mousemove', OnMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePos.x - 16,
      y: mousePos.y - 16
    },
    heading: {
      x: mousePos.x - 100,
      y: mousePos.y - 100,
      height: 200,
      width: 200,
      backgroundColor: 'black', // Change to white on heading
      mixBlendMode: 'soft-light',
    },
  };

  const textVariants = {
    default: { color: 'white' },
    heading: { color: 'pink' },
  };

  const HEnter = () => {
    console.log("mouse enter");
    settext("heading");
  };

  const HLeave = () => {
    console.log("mouse leave");
    settext("default");
  };

  return (
    <>
      <div>
        <h1
          onMouseEnter={HEnter}
          onMouseLeave={HLeave}
          initial="default"
          animate={text}
          variants={textVariants}
        >
          Hello World
        </h1>
        <motion.div className="cursor" variants={variants} animate={text} />
      </div>
    </>
  );
};

export default App;
