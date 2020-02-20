import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search/Search';
import Results from './components/Results/Results';
import './App.css';

const App = () => {
  const [error, setError] = useState();
  const [results, setResults] = useState();
  const [repo, setRepo] = useState();
  const [keyword, setKeyword] = useState();
  const [count, setCount] = useState();
  const apiUrl = 'https://api.github.com/search/commits?q=';

  const handleSubmit = e => {
    setError('');
    e.preventDefault();

    axios
      .get(`${apiUrl}repo:${repo}+${keyword}`, {
        headers: { Accept: 'application/vnd.github.cloak-preview' }
      })
      .then(response => {
        console.log(response.data.items);
        setCount(response.data.total_count);
        setResults(response.data.items);
      })
      .catch(err => {
        setError('Please enter all valid values');
      });
  };

  return (
    <div>
      <div className='wrapper-form'>
        <h4>Search by keyword or ticket ID to view all commits</h4>
        <Search
          handleSubmit={handleSubmit}
          setRepo={setRepo}
          setKeyword={setKeyword}
          error={error}
        />
      </div>

      {results ? (
        <div className='wrapper-grid'>
          <Results count={count} results={results} />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
