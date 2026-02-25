// import React from "react";

import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { motion } from "framer-motion";

// import "./TopContent.css";

const Home = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    let myP5;

    const sketch = (p) => {
      let angle;

      const getSize = () => {
        return sketchRef.current.offsetWidth;
      };

      p.setup = () => {
        const size = getSize();
        const canvas = p.createCanvas(size, size);
        canvas.parent(sketchRef.current);

        p.stroke(0, 255, 195);
        p.strokeWeight(2);
        p.noFill();

        p.drawingContext.shadowColor = "rgb(0,255,195)";
      };

      p.windowResized = () => {
        const size = getSize();
        p.resizeCanvas(size, size);
      };

      p.draw = () => {
        p.clear();

        // center tree
        p.translate(p.width / 2, p.height);

        angle = p.map(p.sin(p.frameCount * 0.02), -1, 1, p.PI / 2, p.PI / 16);

        branch(p.width * 0.25);
      };

      function branch(len) {
        p.line(0, 0, 0, -len);
        p.translate(0, -len);

        if (len > 4) {
          p.push();
          p.rotate(angle);
          branch(len * 0.67);
          p.pop();

          p.push();
          p.rotate(-angle);
          branch(len * 0.67);
          p.pop();
        }
      }
    };

    myP5 = new p5(sketch);

    return () => myP5.remove();
  }, []);

  const text = "Hi, Pradnya here.";
  const name = "Pradnya";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    /* CENTERING CONTAINER */
    <div
      name="Home"
      className="h-screen flex flex-col justify-center items-center w-full text-center  px-4 pt-6"
    >
      {/* responsive canvas wrapper */}
      <div
        ref={sketchRef}
        className="
          fractal-tree
          w-[220px]
          sm:w-[300px]
          md:w-[350px]
          lg:w-[400px]
        "
      />
      {/* NAME */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl  font-bold text-[#ccd6f6] pt-10">
        {displayText.split("").map((char, i) => {
          const start = text.indexOf(name);
          const end = start + name.length;

          const isNameChar = i >= start && i < end;

          return (
            <span key={i} className={isNameChar ? "text-[rgb(0,255,195)]" : ""}>
              {char}
            </span>
          );
        })}

        <span className="cursor ml-3 text-[rgb(0,255,195)] animate-pulse opacity-0">
          |
        </span>
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 max-w-xl text-gray-400 text-sm sm:text-base sm:px-10 leading-relaxed md:text-xl px-5 md:px-1">
        I build modern web experiences using React, Tailwind CSS and creative
        coding. Passionate about interactive UI, animations and clean design.
      </p>
      <button
        onClick={() => window.open("/resume.pdf")}
        className="bg-[#112240] text-xs  text-white px-4 py-2 rounded-xl md:hidden mt-5"
      >
        Download Resume
      </button>
    </div>
  );
};

export default Home;
