import React from "react";

function Footer() {
    return (
        <div className="footer-section">
            <div>
                <p className="footer-element">

                    <a rel="noreferrer"
                        target="_blank"
                        href="https://www.upwork.com/freelancers/~015db252c89baea295" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/upwork.png'} width="15px" height="10px" />
                        </span>
                    </a>
                    <a rel="noreferrer"
                        target="_blank"
                        href="https://github.com/PopGirma1?tab=repositories" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/github.svg'} width="15px" height="10px" />
                        </span>
                    </a>

                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="mailto:girmaytadesepop@gmail.com" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/email.png'} width="15px" height="15px" />
                        </span>
                    </a>

                    <a rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/girmay-tadese-840041189/" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/linkedin.svg'} width="15px" height="10px" />
                        </span>
                    </a>

                    <a rel="noreferrer"
                        target="_blank"
                        href="tel:+251940651252" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/phone.png'} width="15px" height="10px" />
                        </span>
                    </a>

                    <a rel="noreferrer"
                        target="_blank"
                        href="https://wa.me/+251940651252" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/whatsapp.svg'} width="15px" height="10px" />
                        </span>
                    </a>

                    <a rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/RophGirmaAdi/" >
                        <span id="contact">
                            <img src={process.env.PUBLIC_URL + '/image/facebook.svg'} width="15px" height="10px" />
                        </span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;