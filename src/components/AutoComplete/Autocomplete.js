/**
 * @author Rishi Raj
 * @email rishi@snaphy.com
 * @create date 2021-10-07 23:37:51
 * @modify date 2021-10-07 23:37:51
 * @desc [description]
 */
import React from "react";
import {PureComponent} from "react";

// Custom
import SuggestionsList from "../SuggestionsList/SuggestionsList";
// Styles
import "./AutoComplete.css";

class Autocomplete extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showSuggestions: false,
      input: "",
      suggestionFiltered: [],
      suggestionIndex: 0,
    };
  }
  setShowSuggestions = (suggestion) => {
    this.setState({
      showSuggestions: suggestion,
    });
  };
  setInput = (userInput) => {
    this.setState({
      input: userInput,
    });
  };

  setSuggestionFiltered = (value) => {
    this.setState({
      suggestionFiltered: value,
    });
  };

  setSuggestionIndex = (index) => {
    this.setState({
      suggestionIndex: index,
    });
  };
  onChange = (e) => {
    const {suggestions} = this.props;
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setInput(userInput);
    this.setSuggestionFiltered(unLinked);
    this.setSuggestionIndex(0);
    this.setShowSuggestions(true);
  };

  onKeyDown = (e) => {
    const {suggestionFiltered, suggestionIndex} = this.state;
    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setInput(suggestionFiltered[suggestionIndex]);
      this.setSuggestionIndex(0);
      this.setShowSuggestions(false);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (suggestionIndex === 0) {
        return;
      }

      this.setSuggestionIndex(suggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (suggestionIndex - 1 === suggestionFiltered.length) {
        return;
      }

      this.setSuggestionIndex(suggestionIndex + 1);
    }
  };

  onClick = (e) => {
    this.setSuggestionFiltered([]);
    this.setInput(e.target.innerText);
    this.setSuggestionIndex(0);
    this.setShowSuggestions(false);
  };

  render() {
    const {showSuggestions, suggestionFiltered, suggestionIndex, input} =
      this.state;
    return (
      <>
        <input
          type="text"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={input}
        />
        {showSuggestions && input && (
          <SuggestionsList
            onClick={this.onClick}
            filteredSuggestions={suggestionFiltered}
            activeSuggestionIndex={suggestionIndex}
          />
        )}
      </>
    );
  }
}
export default Autocomplete;
