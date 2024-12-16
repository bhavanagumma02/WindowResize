import React, { useState, useEffect } from "react";

const Screen = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="screen-container">
      <div>
        <h1>Screen Size Example</h1>
        <p>Resize the window to see the screen size:</p>
        <p>Width: {screenSize.width}px</p>
        <p>Height: {screenSize.height}px</p>
      </div>
    </div>
  );
};

export default Screen;
