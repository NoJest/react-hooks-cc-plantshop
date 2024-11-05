import React from "react";

function Search({setSearchPlants}) {

  function handleInput(e){
    setSearchPlants(e.target.value)
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleInput}
      />
    </div>
  );
}

export default Search;
