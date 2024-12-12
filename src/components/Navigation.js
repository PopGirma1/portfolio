import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  const tabs = ["Certificates", "Resume", "Feedback"];

  return (
    <div className="tabs is-centered">
      <ul className="nav nav-tabs">
        {tabs.map((tab) => (
          <li
            className={currentPage === tab ? "nav-item is-active" : "nav-item"}
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => handlePageChange(tab)}
              className={
                currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
