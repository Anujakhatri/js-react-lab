import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="आज के हेर्ने?"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log('Search input:', e.target.value);
          }}
        />
      </div>
    </div>
  )
}
export default Search