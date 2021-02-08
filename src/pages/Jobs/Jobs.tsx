import React from "react";
import { JobsList, SearchAndFilterBar } from "./components";

export const Jobs: React.FC = () => {
  return (
    <>
      <SearchAndFilterBar />
      <JobsList />
    </>
  );
};
