import React from "react";

function About() {
    return (
        <div className="about">
            <div className="about-page">
                <img className="profile-pic" src={process.env.PUBLIC_URL + '/image/girmay.png'} alt="Abel Zemo Profile Picture" />
                <div className="about-content">
                    <p>
                        Hello, I am Girmay.
                        Full Stack Developer and Cypress Tester.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default About;