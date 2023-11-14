import React from "react";

import Input from "@Components/common/input";
import Button from "@Components/common/button";

import "./style.scss";

const SearchBar = (props) => {
  const { value, onChange, onClick } = props;

  return (
    <div className="search-bar">
      <Input
        placeholder="Search for a transaction"
        value={value}
        onChange={onChange}
      />
      <Button variant="medium" search onClick={onClick} label="Search" />
    </div>
  );
};

export default SearchBar;
