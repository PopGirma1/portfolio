import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Profession from './profession';

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Profession":
                return <Profession />;
            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/PopGirma1?tab=repositories"
                    >
                        <span className="content is-large">Repos</span>
                    </a>
                    <Navigation
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                    />
                </div>

            </nav>
            {/* Pass the state value and the setter as props to NavTabs */}

            {/* Call the renderPage function passing in the currentPage */}
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;