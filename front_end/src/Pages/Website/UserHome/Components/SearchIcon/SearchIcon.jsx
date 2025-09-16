import React, { useContext, useState } from "react";
import { GlobalSearchContext } from "../../../../../Context/GlobalSearchContext";
import { FaSearch, FaTimes } from "react-icons/fa";
import "./SearchIcon.css";

const SearchIcon = ({ searchTerm, setSearchTerm }) => {
  const { globalItems } = useContext(GlobalSearchContext);
  const [isFocused, setIsFocused] = useState(false);

  const filteredResults = !searchTerm.trim()
    ? []
    : globalItems.filter((item) => {
        const lowerQuery = searchTerm.toLowerCase();
        return (
          item.title.toLowerCase().includes(lowerQuery) ||
          item.description.toLowerCase().includes(lowerQuery) ||
          item.category.toLowerCase().includes(lowerQuery) ||
          item.difficulty.toLowerCase().includes(lowerQuery) ||
          item.state.toLowerCase().includes(lowerQuery)
        );
      });

  const handleReset = () => {
    setSearchTerm("");
    setIsFocused(false);
  };

  return (
    <div className="search-icon__wrapper">
    <form className="search-icon">
      {!isFocused && <FaSearch className="search-icon__icon" onClick={() => setIsFocused(true)} />}
      <div className="search-icon__input-container">
        <input
          type="text"
          className={`search-icon__input form-control ${isFocused ? "visible" : "hidden"}`}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
        {isFocused && (
          <button type="button" className="search-icon__reset btn" onClick={handleReset}>
            <FaTimes />
          </button>
        )}
      </div>
    </form>


      {filteredResults.length > 0 && (
        <ul className="search-icon__results list-unstyled">
          {filteredResults.map((item) => (
            <li key={item.id} className="search-icon__result-item">
              <a href={item.link} className="search-icon__result-link d-flex align-items-center">
                <img src={item.image} alt={item.title} className="search-icon__result-image" />
                <div className="search-icon__result-info">
                  <h6 className="search-icon__result-title">{item.title}</h6>
                  <p className="search-icon__result-description mb-0">{item.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchIcon;