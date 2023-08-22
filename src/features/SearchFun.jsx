import React, { useState, useEffect } from 'react';

const SearchFun = () => {
    const [apiData, setApiData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchApi = () => {
        fetch(`https://jsonplaceholder.typicode.com/users?q=${searchQuery}`)
            .then(response => response.json())
            .then(data => setApiData(data))  // Wrap the data in an array since you're mapping over an array
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchApi();
    }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent the default form submission behavior
        fetchApi();
    }

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    return (
        <div>
            <h2>Api Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {apiData.map((d, i) => (
                <p key={i}>{`(${i})`} {d.email}</p>
            ))}
        </div>
    );
}

export default SearchFun;
