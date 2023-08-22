import React, { useState, useEffect } from "react";

const SearchFun = () => {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState(`https://jsonplaceholder.typicode.com/users`);

  const fetchApi = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setApiData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchApi();
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setUrl(`https://jsonplaceholder.typicode.com/users?q=${searchQuery}`);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h2>Api Data</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {apiData.map((d, i) => (
        <p key={i}>
          {`(${d.id})`} {d.email}
        </p>
      ))}
    </div>
  );
};

export default SearchFun;
