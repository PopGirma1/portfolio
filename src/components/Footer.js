import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div className="content has-text-centered">
                <p>
                    <a
                        href="https://www.linkedin.com/in/girmay-tadese-840041189/"
                        target="_blank" rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                    {" "}
                    |{" "}{" "}
                    <a href="https://github.com/PopGirma1" target="_blank" rel="noreferrer">
                        Github
                    </a>

                    {" "}
                    |{" "}{" "}
                    <a href="girmaytadesepop@gmail.com">Email</a>

                    {" "}
                    |{" "}{" "}
                    <a href="https://www.facebook.com/RophGirmaAdi">Facebook</a>

                </p>
            </div>
        </div>
    );
}

export default Footer;