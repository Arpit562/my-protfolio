import React, { useEffect, useRef, useState } from 'react';


const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(aboutRef.current);
                }
            },
            { threshold: 0.3 }
        );
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }
    }, []);

    return (
        <section>
            <div className="AboutSection">
                <div className="container">
                <div ref={aboutRef} className={`about-section ${isVisible ? 'show' : ''}`}>
            <h2 className='text-center'>About Me</h2>
            <p>
                Hello! I'm Arpit Kumar Prajapat, a passionate self-taught Frontend Developer.  
                I love building interactive and responsive web applications using modern tools like React.js.
            </p>
            <p>
                I enjoy solving problems through code and constantly learning new technologies to improve my skills.
                Currently, I'm exploring advanced React concepts and preparing for frontend development opportunities.
            </p>
        </div>
   
                </div>
            </div>
        </section>
    )
       
};

export default About;

