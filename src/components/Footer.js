import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="content has-text-centered">
                <p className="footer-element">

                <a rel="noreferrer"
                                target="_blank"
                                href="https://www.upwork.com/freelancers/~015db252c89baea295" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/upwork.png'} width="20px" height="20px" />
                                    Upwork
                                </span>
                            </a>
                            <a rel="noreferrer"
                                target="_blank"
                                href="https://github.com/PopGirma1?tab=repositories" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/github.svg'} width="20px" height="20px" />
                                    Github
                                </span>
                            </a>

                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="mailto:girmaytadesepop@gmail.com" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/email.png'} width="15px" height="15px" />
                                    Email
                                </span>
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/girmay-tadese-840041189/" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/linkedin.svg'} width="20px" height="20px" />
                                    Linkedin
                                </span>
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="tel:+251940651252" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/phone.png'} width="20px" height="20px" />
                                    Phone
                                </span>
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://wa.me/+251940651252" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/whatsapp.svg'} width="20px" height="20px" />
                                    Whats App
                                </span>
                            </a>

                            <a rel="noreferrer"
                                target="_blank"
                                href="https://www.facebook.com/RophGirmaAdi/" >
                                <span id="contact">
                                    <img src={process.env.PUBLIC_URL + '/image/facebook.svg'} width="20px" height="20px" />
                                    Facebook
                                </span>
                            </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;