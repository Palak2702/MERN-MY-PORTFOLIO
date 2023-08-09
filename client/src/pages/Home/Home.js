import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import { Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import me from "../../images/profile 0.jpg";
import Timeline from "../Timeline/Timeline";

import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Home = ({ timelines, skills }) => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div className="home">
      <div className="homeCanvasContainer">
        <section>
          <img src={me} alt="Palak" />
        </section>
        <section>
          <div className="hd">
            <motion.h1 {...animations.h1}>
              Hi,My Name is <br />
              Palak Khandelwal.
            </motion.h1>
            <Typewriter
              options={{
                strings: ["I am a  MERN stack  developer", "And a Programmer"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara",
              }}
            />
            <div className="hd2">
              <Link to="/projects">VIEW WORK</Link>
            </div>
            <p>This is a MERN Stack Portfolio.</p>
          </div>
        </section>
      </div>

      <div className="hometimeline">
        <Typography variant="h3">TIMELINE</Typography>
        <Timeline timelines={timelines} />
      </div>

      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills.image1.url} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills.image2.url} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills.image3.url} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills.image4.url} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills.image5.url} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills.image6.url} alt="Face6" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeskillsBox" id="homeskillsBox">
          <FaJava />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
        </div>
      </div>
    </div>
  );
};

export default Home;
