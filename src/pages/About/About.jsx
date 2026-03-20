import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.jpg" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I’m Shantanu, a final-year Computer Science Engineering student in India also admitted to 26/28 University of Padova for Master’s degree in Italy. 
            I’m passionate about technology and constantly learning more about the field through my studies and projects. 
            I aim to grow academically and personally while building a meaningful career.

          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;