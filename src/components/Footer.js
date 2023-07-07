import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="content has-text-centered">
                <p className="footer-element">

                    <a
                        href="https://www.linkedin.com/in/girmay-tadese-840041189/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={process.env.PUBLIC_URL + '/image/linkedin.svg'} width="20px" height="20px" />
                    </a>

                    <a href="https://github.com/PopGirma1"
                        target="_blank"
                        rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/image/github.svg'} width="20px" height="20px" />
                    </a>

                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="girmaytadesepop@gmail.com">
                        <img src={process.env.PUBLIC_URL + '/image/email.png'} width="20px" height="20px" />
                    </a>

                    <a href="https://www.facebook.com/RophGirmaAdi"
                        target="_blank"
                        rel="noreferrer">
                        <img src={process.env.PUBLIC_URL + '/image/facebook.svg'} width="20px" height="20px" />
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Footer;