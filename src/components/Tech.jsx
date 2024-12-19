import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const techBallsRef = useRef(null); // Referenz für die techBalls-Div
  
  useEffect(() => {
    const techBalls = techBallsRef.current.querySelectorAll(".tech-ball");
    
    // Sicherstellen, dass die DOM-Elemente existieren
    if (techBalls) {
      techBalls.forEach((ball) => {
        ball.addEventListener("mouseover", () => {
          // Alle anderen Bälle bluren
          techBalls.forEach((otherBall) => {
            if (otherBall !== ball) {
              otherBall.classList.add(
                "blur-md",
                "duration-700",
                "scale-75",
                "ease",
                "opacity-50",
                "grayscale"
              );
            }
          });
        });

        ball.addEventListener("mouseout", () => {
          // Alle Bälle werden wieder scharf
          techBalls.forEach((otherBall) => {
            otherBall.classList.remove(
              "blur-md",
              "duration-700",
              "scale-75",
              "ease",
              "opacity-50",
              "grayscale"
            );
          });
        });
      });
    }

    // Cleanup-Funktion, um Event-Listener zu entfernen
    return () => {
      techBalls.forEach((ball) => {
        ball.removeEventListener("mouseover", () => {});
        ball.removeEventListener("mouseout", () => {});
      });
    };
  }, []); // Leeres Dependency-Array, damit dieser Effekt nur einmal ausgeführt wird

  const handleBallClick = (url) => {
    // Öffne die URL in einem neuen Tab
    window.open(url, "_blank");
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10`}>
          Technologies
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-20`}>
          TechStack.
        </h2>
      </motion.div>

      {/* Die Referenz wird auf die übergeordnete Div gesetzt */}
      <div
        ref={techBallsRef}
        className="flex flex-row flex-wrap justify-center gap-10 mb-5"
      >
        {technologies.map((technology) => (
          <div
          className="tech-ball w-28 h-28 mt-10 cursor-pointer transform transition-transform duration-1000 hover:scale-125 hover:brightness-125 hover:saturate-200"
            key={technology.name}
            onClick={() => handleBallClick(technology.url)}
          >
            <BallCanvas icon={technology.icon} />
            <h4
              className={`${styles.sectionSubText} text-center py-5 text-purple-200`}
            >
              {technology.name}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
