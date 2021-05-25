import React from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import ResultsTable from "../components/ResultsTable/ResultsTable";

function SearchPage() {
  return (
    <div>
      <Searchbar />
      <ResultsTable />
    </div>
  );
}

export default SearchPage;
