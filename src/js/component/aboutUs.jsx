import React from "react";
import backgnd from '../../img/backgnd.png';

const About = () => {
    return (
        <div className="container p-2 mt-5" id="aboutus">
            <div className="bg-body-tertiary rounded-3" 
                 style={{ 
                     backgroundImage: `url(${backgnd})`, 
                     backgroundSize: 'cover', 
                     backgroundPosition: 'center', 
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     position: 'relative',
                     minHeight: '450px'  
                 }}>
                <div style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                        padding: '20px', 
                        width: '100%', 
                        textAlign: 'center',
                    }}>
                    <h2 className="p-3 text-white">
                    Creating Unforgettable Journeys to the World’s Most Enchanting Destinations
                    </h2>
                    <p className="fs-5 text-white">
                        At AdventureSphere, we specialize in creating unforgettable travel experiences to the world’s most breathtaking places. Our expertly crafted packages cater to every type of traveler, whether you’re dreaming of exploring historic cities, relaxing on pristine beaches, or immersing yourself in vibrant cultures. With a deep passion for travel, we take pride in turning your wanderlust into reality, ensuring every journey is as seamless as it is spectacular. Let us take you beyond the ordinary and into the extraordinary—your adventure of a lifetime starts here.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default About;
