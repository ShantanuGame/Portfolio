import UnicornScene from "unicornstudio-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="fQOJNj1N8ik0LavR8IIw"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />

      <div className="hero-text-overlay">
        <h1>Hi! I'm Shantanu</h1>
      </div>

      <div className="content">
        <div className="buttn">
          <a href="https://drive.google.com/file/d/1e6e1cGUjRYBHhaEps2ctQwvl4Vs5P0A0/view?usp=sharing" target="blank">Resume</a>
          <a href="#About">Open-source Contribution</a>
        </div>
      </div>
    </div>
  );
}