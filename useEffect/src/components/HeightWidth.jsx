import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HeightWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // window.addEventListener("resize", handleResize); //without useEffect
  // with useEffect

  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);



  return (
    <div className="p-4">
      <p>Window Width : {width}</p>
      <p>Window Width : {height}</p>
    </div>
  );
};

export default HeightWidth;
