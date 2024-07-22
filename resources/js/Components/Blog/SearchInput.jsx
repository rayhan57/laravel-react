import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const query = new URLSearchParams(window.location.search);
  const category = query.get("category");
  const author = query.get("author");

  const handleSubmit = (e) => {
    if (!searchValue.trim()) {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {category && <input type="hidden" name="category" value={category} />}
      {author && <input type="hidden" name="author" value={author} />}
      <div className="mb-7 flex items-center md:w-1/2 md:translate-x-1/2">
        <div
          className={`flex flex-auto items-center rounded-l-md border bg-white ${
            isFocused && "ring-1"
          }`}
        >
          <CiSearch size={20} className="ml-2" />
          <input
            type="text"
            id="search"
            className="flex-auto border-none focus:outline-none focus:ring-0"
            name="search"
            placeholder="Search Posts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required
          />
        </div>
        <button className="rounded-r-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
