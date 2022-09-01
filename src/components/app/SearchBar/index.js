import React from "react";
import Input from "../../common/input";
import Button from "../../common/button";

import './style.css'

const SearchBar = () => {
  return (
    <>
      <div className='search-bar'>
        <Input placeholder="Search for a transaction" />
        <Button variant="medium" search={true} >Search</Button>
      </div>
    </>
  )
}

export default SearchBar;