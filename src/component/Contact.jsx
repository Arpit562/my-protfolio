
import React, { useEffect, useRef, useState } from 'react';


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(contactRef.current);
        }
      },
      { threshold: 0.3 }
    );
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
  }, []);

  return (
   <section>
    <div className="ContactSection">
    <div ref={contactRef} className={`contact-section ${isVisible ? 'show' : ''}`}>
      <h2>Contact Me</h2>
      <p>You can reach me anytime via:</p>
      <p>Location : Indore (Madhya Pradesh)</p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> arpitkumarprajapat706@gmail.com</p>
        {/* <p><strong>Phone:</strong> +91 8107470666</p> */}
        <p><strong>LinkedIn:-</strong> 
          <a href="https://www.linkedin.com/in/arpitkumarprajapat" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/arpitkumarprajapat
          </a>
        </p>
      </div>
    </div>
    </div>
   </section>
  );
};

export default Contact;

