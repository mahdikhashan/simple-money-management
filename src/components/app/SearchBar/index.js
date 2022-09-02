import React from "react";

import Input from "../../common/input";
import Button from "../../common/button";

import './style.css'

const SearchBar = ({value, onChange, onClick}) => {
  return (
    <>
      <div className='search-bar'>
        <Input placeholder="Search for a transaction" value={value} onChange={onChange}/>
        <Button variant="medium" search={true} onClick={onClick} label='Search'/>
      </div>
    </>
  )
}

export default SearchBar;