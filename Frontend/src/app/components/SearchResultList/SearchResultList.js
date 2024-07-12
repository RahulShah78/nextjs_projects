'use client'

import SearchResult from "../SearchResult/SearchResult";






export default function SearchResultsList  ({ results })  {
  return (
    <div className="results-list absolute left-[46.3%] bottom-[32%] z-1 bg-[#e5e5e5]">
      {results.map((result) => {
        // <div>
        return <SearchResult  result={result.title}   />;
        {/* </div> */}
       
      })}
    </div>
  );
};

SearchResultsList.defaultProps = {
    results: () => {},
  };