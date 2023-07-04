
import React from 'react';
import { useCollapse } from 'react-collapsed';
import ReactCurvedText from "react-curved-text";

function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
    return (
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
                <div className="icon">
                    <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
                </div>
            </div>
            <div {...getCollapseProps()}>
                <div className="collapse">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
function About() {
    return (
        <div className='about-page'>

            <div className='about-content'>

                <img className="welcome-pic" src={process.env.PUBLIC_URL + '/image/girmay.JPG'} alt="Abel Zemo Profile Picture" />
            </div>

            <div className="preferences">
                <Section title="" defaultExpanded="true">
                    <div >
                        <p className='paragraph'>
                            I am highly interested to apply for the job opportunity at your organization and I
                            hope to anticipate a positive response from you soon.
                            Would you kindly keep me at the forefront of your mind, as I am very much
                            genuine in my desire to join and share your organization.
                            Hopefully, I would highly appreciate it at any given date and time convenient
                            for you.
                        </p>
                    </div>
                </Section>

                <Section title="" defaultExpanded="flase">
                    <div >
                        <p className='paragraph'>
                            I am looking forward for your prompt consideration and approval in this matter,
                            as I will be glad to offer and provide my abilities and qualifications to your
                            organization.
                            Please find attached a copy of my curriculum vitae, which outlines my
                            personal details and educational background.
                        </p>
                    </div>
                </Section>

                <Section title="" defaultExpanded="false">
                    <div>
                        <p className='paragraph'>
                            I am looking forward to work in a comparative and productive company, in order to
                            improve my skills, increase my knowledge in my field of study and experience, and to
                            be able to demonstrate highest levels of excellence and efficient work through a
                            complete teamwork; I am eager to learn whatever I need to finish work successfully.
                        </p>
                    </div>
                </Section>

            </div>

        </div>
    );
}
export default About;










