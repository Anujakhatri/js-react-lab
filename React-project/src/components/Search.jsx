import React from "react"

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="text-white text-3xl"> 
            Search for a movie
            <input 
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
                
        </div>
    )
}

export default Search