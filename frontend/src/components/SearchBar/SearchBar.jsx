import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <form className="row" onSubmit={handleSubmit} style={{}}>
      <div className="col-10">
        <input
          className="search-bar"
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="col-2">
        <button>Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
