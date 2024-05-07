import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SearchBarProps } from "../shared/types";
const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]); // Explicitly specify the type as string[]

  const handleSearch = () => {
    setSearchHistory((prev) => [...prev, searchTerm]);
  };

  return (
    <div>
      <div className="border rounded-full flex items-center overflow-hidden">
        {" "}
        <input
          className="rounded-full px-4 py-2"
          title="searchTerm"
          placeholder="Search any word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 hover:bg-gray-100 rounded-full py-2"
          title="search"
          onClick={handleSearch}
        >
          <CiSearch />
        </button>
      </div>
      {searchTerm && searchHistory.length > 0 && (
        <div className="bg-white shadow-md px-4 py-2 max-h-28 overflow-y-auto">
          {searchHistory.map((item) => (
            <p
              className="py-1 border-b-2 cursor-pointer "
              onClick={() => setSearchTerm(item)}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
