/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-07 23:49:52
 * @modify date 2021-10-07 23:49:52
 * @desc [description]
 */
import React from "react";

// Styles
import "./SuggestionsList.css";

const SuggestionsList = ({
  filteredSuggestions,
  onClick,
  activeSuggestionIndex,
}) => {
  return filteredSuggestions.length ? (
    <ul className="suggestions">
      {filteredSuggestions.map((suggestion, index) => {
        let className;

        // Flag the active suggestion with a class
        if (index === activeSuggestionIndex) {
          className = "suggestion-active";
        }

        return (
          <li
            className={className}
            key={suggestion}
            onClick={(e) => onClick(e)}
          >
            {suggestion}
          </li>
        );
      })}
    </ul>
  ) : (
    <div className="no-suggestions">
      <em>Sorry no suggestions found</em>
    </div>
  );
};

export default SuggestionsList;
