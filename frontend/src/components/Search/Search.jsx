import React from "react";
import Input from "../Input/Input";

const SearchBar = ({ userInput, setUserInput }) => {
  return (
    <div className="search-box">
      <Input
        label={"Search Video"}
        type={"text"}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
