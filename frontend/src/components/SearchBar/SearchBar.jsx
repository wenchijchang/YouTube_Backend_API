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
    <form className="form-inline" onSubmit={handleSubmit}>
      <input
        className="form-control mr-xl-2"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0"
        style={{ marginLeft: "10px" }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
