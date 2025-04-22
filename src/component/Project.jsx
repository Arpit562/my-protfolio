import React, { useEffect, useRef, useState } from 'react';


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(projectRef.current);
        }
      },
      { threshold: 0.2 }
    );
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
  }, []);

  return (
    <section>
      <div className="projectSection">
      <div ref={projectRef} className={`projects-section ${isVisible ? 'show' : ''}`}>
      <h2 className='text-center'>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>A personal portfolio built using React, showcasing my skills and projects with smooth scroll animations and a dark theme.</p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>A weather forecast app using OpenWeatherMap API. Built with HTML, CSS, and JavaScript. Responsive and clean UI.</p>
        </div>

        <div className="project-card">
          <h3>ToDo List App</h3>
          <p>A task manager built with React. Supports adding, deleting, and filtering tasks. Data is stored in localStorage.</p>
        </div>
      </div>
    </div>
        </div>
    </section>
  );
};

export default Projects;

