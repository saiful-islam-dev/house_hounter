import { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here using the 'searchTerm' state
    console.log("Search term:", searchTerm);
    // Add the logic to perform the search based on the 'searchTerm'
  };

  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-white">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none border-none bg-transparent text-gray-700 bg-white"
          />
        </div>
        <button
          onClick={handleSearch}
          className="p-2 mr-2 bg-rose-500 rounded-full text-white"
        >
          <BiSearch size={18} />
        </button>
      </div>
    </div>
  );
};

export default Search;
