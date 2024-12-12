import React, { useState } from "react";
import Navigation from "./Navigation";
import Resume from "./Resume";
import Feedback from "./Feedback";
import Certificates from "./Certificates";

function Header() {
  const [currentPage, setCurrentPage] = useState("Certificates");

  const renderPage = () => {
    switch (currentPage) {
      case "Certificates":
        return <Certificates />;
      case "Resume":
        return <Resume />;
      case "Feedback":
        return <Feedback />;
      default:
        return <Certificates />;
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
            handlePageChange={setCurrentPage}
          />
        </div>
      </nav>
      <main>
        <div>{renderPage()}</div>
      </main>
    </div>
  );
}

export default Header;
