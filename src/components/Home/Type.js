import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "FrontEnd Developer",
          "Open Source Contributor",
          "Traveller",
          "Backpacker",
          "Badminton Player",
          "Cricketer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
