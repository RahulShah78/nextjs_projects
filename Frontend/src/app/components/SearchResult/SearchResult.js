'use client'
export default function SearchResult  ({ result }) {
    return (
       <div
        className="search-result"
      
        onClick={(e) => alert(`You selected ${result}!`)}
      >
        {result}
      </div>
    );
  };
  SearchResult.defaultProps = {
    result: () => {},
  };