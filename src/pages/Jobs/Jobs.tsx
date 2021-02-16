import React from 'react';
import { JobsList, SearchAndFilterBar } from './components';

import './Jobs.style.css';

const Jobs: React.FC = () => {
  return (
    <div className="jobs-container">
      <SearchAndFilterBar />
      <JobsList />
    </div>
  );
};

export default Jobs;
