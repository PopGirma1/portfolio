import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import ProgressBar from "@ramonak/react-progress-bar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ReactCurvedText from "react-curved-text";

export default function Resume() {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "girmay-resume",
        onafterprint: () => alert("Successfully printed")
    })

    return (
        <div className='profession_page' ref={componentRef}>
            <div className='profession-left'>

                <div className='profession-left-section1'>
                    <ReactCurvedText
                        width={400}
                        height={160}
                        cx={150}
                        cy={150}
                        rx={100}
                        ry={50}
                        startOffset={0}
                        reversed={true}
                        text="Software engineer"
                        textProps={{ style: { fontSize: 28.5, transform: "rotate(0deg)", fontWeight: "bold" } }}
                        textPathProps={null}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                    />
                </div>

                <div className='profession-left-section2'>
                    <img className="resume-pic" src={process.env.PUBLIC_URL + '/image/girmay.JPG'} alt="Abel Zemo Profile Picture" />
                </div>

                <div className='profession-left-section3'>
                    <div id="column">
                        <div>
                            <h3>Contact</h3>
                        </div>
                        <div className='column-content'>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://www.upwork.com/freelancers/~015db252c89baea295" className="links">
                                Upwork
                            </a>
                            <a rel="noreferrer"
                                target="_blank"
                                href="https://github.com/PopGirma1?tab=repositories" className="links">
                                GitHub
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/girmay-tadese-840041189/" className="links">
                                Linkedin
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/RophGirmaAdi/" className="links">
                                Facebook
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="mailto:girmaytadesepop@gmail.com" className="links">  Email</a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="tel:+251940651252" className="links"> Phone</a>
                        </div>


                        <div>
                            <h3>Skills</h3>
                        </div>
                        <div className='column-content'>

                            <ul>
                                <li> HTML<ProgressBar completed={100} /> </li>
                                <li> CSS<ProgressBar completed={100} /> </li>
                                <li> Github Repo Management<ProgressBar completed={100} /> </li>
                                <li> JSON<ProgressBar completed={100} /> </li>
                                <li> Git<ProgressBar completed={100} /> </li>
                                <li> SQL<ProgressBar completed={100} /> </li>
                                <li> Javascript<ProgressBar completed={100} /> </li>
                                <li> jQuery<ProgressBar completed={100} /> </li>
                                <li> MongoDB<ProgressBar completed={100} /> </li>
                                <li> Express.JS<ProgressBar completed={100} /> </li>
                                <li> React<ProgressBar completed={100} /> </li>
                                <li> Node JS<ProgressBar completed={100} /> </li>
                                <li> Python<ProgressBar completed={100} /> </li>
                                <li> REST API<ProgressBar completed={100} /> </li>
                                <li> Material UI<ProgressBar completed={100} /> </li>
                                <li> Styled Components<ProgressBar completed={100} /> </li>
                                <li> Bootstrap<ProgressBar completed={100} /> </li>
                                <li>Cypress<ProgressBar completed={100} /> </li>
                                <li> Django<ProgressBar completed={90} /> </li>
                                <li> Handlebars <ProgressBar completed={90} /> </li>
                                <li> Flask<ProgressBar completed={90} /> </li>
                                <li> SASS<ProgressBar completed={90} /> </li>
                                <li> Tailwind<ProgressBar completed={90} /> </li>
                                <li> Typescript<ProgressBar completed={80} /> </li>
                                <li> GraphQL<ProgressBar completed={80} /> </li>
                                <li> Redux<ProgressBar completed={80} /> </li>
                                <li>Zustand<ProgressBar completed={80} /> </li>
                                <li> Flutter<ProgressBar completed={80} /> </li>
                                <li> Java<ProgressBar completed={80} /> </li>
                                <li> Next JS<ProgressBar completed={80} /> </li>
                                <li> NGINX Reverse proxying<ProgressBar completed={80} /> </li>
                                <li> RabbitMQ<ProgressBar completed={80} /> </li>
                                <li> Dockerization<ProgressBar completed={80} /> </li>

                            </ul>

                        </div>


                        <div>
                            <h3>Hobbies</h3>
                        </div>
                        <div className='column-content'>
                            <p>✅ Codding.</p>

                            <p>✅ Solving algorithms.</p>

                            <p>✅ Critical thinking.</p>

                        </div>

                        <div>
                            <h3>Languages</h3>
                        </div>

                        <div className='column-content'>
                            <p>✅  Tigrinya (Tigrigna)</p>
                            <p>✅  Amharic</p>
                            <p>✅  English</p>
                        </div>

                        <div>
                            <h3>Resume</h3>
                        </div>

                        <div className='column-content'>
                            <button id="download" onClick={handlePrint}>Print My Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profession-right'>

                <div className='profession-right-section1'>
                    <h2>
                        GIRMAY TADESE
                    </h2>
                </div>

                <div className='profession-right-section2'>
                    <Card id="profession">
                        <CardContent>
                            <p className="profession">
                                Develop, Design, and Test Software Applications.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className='profession-right-section3'>

                    <div id="column">

                        <div>
                            <h3>EDUCATION</h3>
                            <hr />
                        </div>
                        <div className='column-content' >
                            <h5 className="sub-title"> Addis Ababa University.</h5>

                            <p>
                                ✔   I have graduated from Addis Ababa University, with bachelor of science degree in <span className="field">Software engineering</span>. I chose that field of study because I’ve always been interested in programming.
                            </p>
                        </div>

                        <div>
                            <h3>PROFILE</h3>
                            <hr />
                        </div>
                        <div className='column-content'>
                            <p>
                                ✔ I am a professional mern-stack developer having 6+ years of experience working on projects related to MongoDB, Express.JS, React Hooks, Node.JS, Material UI, Bootstrap, Styled Components, and Cypress as my test automation tool.
                            </p>

                            <p>
                                ✔ Innovative tech mind with 6+ years of experience working as a professional Full-stack developer.
                            </p>
                            <p>
                                ✔ Talented Developer with unique ideas and a history of successful contributions in these Technologies.
                            </p>
                            <span>

                                ✅ Microservices and monolithic architecture on Backend side. <br />
                                ✅ NGINX Reverse proxying.<br />
                                ✅ RabbitMQ for pub sub messaging brokering.<br />
                                ✅ CSS3, SASS, Bootstrap, Tailwind, Styled Components and Material-UI.<br />
                                ✅ HTML5, JavaScript, Typescript, jQuery, React.JS, Next JS and Node.js.<br />
                                ✅ REST And GraphQL.<br />
                                ✅ Redux, context API and Zustand (small, fast, and scalable bare-bones state-management).<br />
                                ✅ MySQL, Sequelize, MongoDB and Firebase.<br />
                                ✅ Unit testing, integration testing and Cypress end to end system testing.<br />
                                ✅ Preparing SDS and SRS documentations and test plan .<br />
                                ✅ Dockerization.<br />
                                ✅ Additional Skills: Java, python and Flutter.
                            </span>
                            <p>
                                ✔ I consider myself to be an innovative and hard-working individual who can achieve anything. I am always exploring new skills and ready for any challenge.
                            </p>
                        </div>

                        <div>
                            <h3>EMPLOYEMENT HISTORY</h3>
                            <hr />
                        </div>

                        <div className='column-content'>

                            <h5 className="sub-title">Upwork freelancer.</h5>
                            <p>
                                ✔  I was working on upwork as a remote freelancer on different companies.
                                I have participated on different projects as a team and as an independent freelancer.
                                I have built many web apps from scratch.
                                My contribution was as a front end and backend developer and also as a software tester.
                            </p>

                            <h5 className="sub-title">Ethiopia Electric Utility.</h5>
                            <p>
                                ✔  I was working on Ethiopia Electric Utility Company by helping the company on creating and test software products from start to finish. we discussed and analyzed user requests and requirements then we made research and brainstorm practical solutions to meet those needs, also we determine the best course of action to create the Billing System application.
                            </p>

                            <h5 className="sub-title">Senior Full Stack Developer | Maya Health Consultancy.</h5>
                            <p>
                                ✔  I have been working on Maya Health Consultant as a full stack developer. Maya Health Consultant exists to provide people with the medical answers they need and deserve when diagnosed with a serious or life-threatening condition, while providing home care, consultation through audio call and in person.
                            </p>

                            <h5 className="sub-title">Tutor.</h5>
                            <p>
                                ✔   I give tutors to help students learn in a non-classroom setting either online via a virtual meeting space or in-person. I tutor students individually or in small groups and provide a variety of services from study skills, note-taking strategies, test preparation, homework assistance, and grasping new concepts.
                            </p>
                        </div>


                        <div>
                            <h3>WHY ME?</h3>
                            <hr />
                        </div>
                        <div className='column-content'>
                            <h5 className="sub-title"> Why me?</h5>

                            <span>
                                ✅ Participated in big projects and have a start-up mindset.<br />

                                ✅ 6+ years of experience in full stack web development.<br />

                                ✅ Fast learner and adapt things fast.<br />

                                ✅ Excellent communication with team members.<br />

                                ✅ Understand requirements fast.<br />

                                ✅ Meet expectations and deadlines.<br />

                                ✅ Deep understanding of the front-end and back-end frameworks and environment.<br />

                                ✅ Designed layouts for different clients based on their requirements.<br />

                                ✅ Eager to learn.<br />

                                ✅ In my setup, I pay attention to details very well.
                            </span>
                        </div>
                    </div>
                    <p className="thanks_message">Await the opportunity to connect with you!</p>
                </div>
            </div>
        </div>
    )
}