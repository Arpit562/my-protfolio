import React, { useEffect, useState } from 'react';


const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // small delay for smooth effect
    }, []);

    return (
        <div className="heroSection-wrapper">
            <div className={`heroSection-content ${isVisible ? 'slide-up' : ''}`}>
                <h1>Hi I'm <span>Arpit Kumar Prajapat</span></h1>
                <p>I'm a Frontend Web Developer based on React Js.</p>
            </div>
        </div>
    );
};

export default HeroSection;


