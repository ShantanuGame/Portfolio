import "./Project.css";

import img1 from "../../assets/images/farm.png";
import img2 from "../../assets/images/Shop.png";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/QR.png";

const projects = [
  {
    title: "FarmIQ-CaneIQ",
    img: img1,
    desc: "AI-driven farming solution that uses weather data and crop insights to predict disease risks and optimize cultivation decisions.",
    skills: ["Python", "AI", "API"],
    github: "https://github.com/ShantanuGame/FarmIQ-CaneIQ-",
    demo: "https://ai-based-precision-farming-for-suga.vercel.app/"
  },
  {
    title: "YOLO Emergency Vehicle",
    img: img2,
    desc: "Intelligent traffic control system using real-time vehicle detection to dynamically adjust signal timings for emergency vehicles.",
    skills: ["Python", "YOLO", "CV"],
    github: "https://github.com/ShantanuGame/Yolo_for_Emergency_vehicle_classification",
    demo: "#"
  },
  {
    title: "Shoplifting Detection",
    img: img3,
    desc: "AI-based CCTV monitoring solution that detects suspicious theft behavior in real time and triggers alerts with captured evidence.",
    skills: ["JavaScript", "AI", "CCTV"],
    github: "https://github.com/ShantanuGame/Shoplifting",
    demo: "#"
  },
  {
    title: "Jarvis Personal Assistant",
    img: img4,
    desc: "Voice-enabled intelligent assistant that automates daily tasks like opening applications, fetching information and setting reminders.",
    skills: ["Python", "NLP", "Voice"],
    github: "https://github.com/ShantanuGame/Jarvis-personal-assistant-prototype-",
    demo: "#"
  },
  {
    title: "AI Career Coach",
    img: img5,
    desc: "AI-based prototype that analyzes user skills and goals to provide personalized guidance for resumes, interviews and career planning.",
    skills: ["JavaScript", "AI", "API"],
    github: "https://github.com/ShantanuGame/AI-Career-Coach",
    demo: "#"
  },
  {
    title: "QR Pipeline",
    img: img6,
    desc: "Smart workflow management software for production industries focusing on component-based production management.",
    skills: ["JavaScript", "QR", "Workflow"],
    github: "https://github.com/ShantanuGame/qr-pipline",
    demo: "#"
  }
];

export default function Project() {
  return (
    <section className="project reveal" id="project">
      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>
            <div className="btns">
              <a href="https://github.com/ShantanuGame" target="_blank" rel="noreferrer" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}