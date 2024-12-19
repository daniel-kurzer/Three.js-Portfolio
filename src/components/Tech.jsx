import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const techBalls = document.querySelectorAll('#tech-balls');

techBalls.forEach(ball => {
    ball.addEventListener('mouseover', () => {
        // Alle anderen Bälle bluren
        techBalls.forEach(otherBall => {
            if (otherBall !== ball) {
                otherBall.classList.add('blur-sm', 'duration-700', 'scale-75', 'transition-all', 'opacity-50', 'grayscale', 'transition-all');
            }
        });
        // Der aktuelle Ball wird nicht geblurrt
    });

    ball.addEventListener('mouseout', () => {
        // Alle Bälle werden wieder scharf
        techBalls.forEach(otherBall => {
            otherBall.classList.remove('blur-sm', 'duration-700', 'scale-75', 'transition-all', 'opacity-50', 'grayscale', 'transition-all');
        });
    });
});


const Tech = () => {

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10`}>Technologies</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-20`}>TechStack.</h2>
    </motion.div>
    
    
    <div className='flex flex-row flex-wrap justify-center gap-10 mb-5'>
      {technologies.map((technology) => (
        <div id="tech-balls" className='w-28 h-28 mt-10 cursor-pointer hover:scale-125 duration-700 hover:brightness-125 hover:saturate-200' key={technology.name} >
          <BallCanvas icon={technology.icon} />
          <h4 className={`${styles.sectionSubText} text-center py-5 text-purple-200`}>{technology.name}</h4>
        </div>
      ))}
    </div>
    
    </>
  );
};

export default SectionWrapper(Tech, "tech");