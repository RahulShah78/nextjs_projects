'use client'
import { useState } from "react";



import SearchResultsList from "../components/SearchResultList/SearchResultList";
import Dropdown from "../components/dropdown/Dropdown";




function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <Dropdown setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;